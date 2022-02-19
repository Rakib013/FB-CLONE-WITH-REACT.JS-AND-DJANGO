import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosInitial } from '../api/axios';

function LogSignUp() {
    const [isPoped, setIsPoped] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surName, setSurName] = useState("");

    const login = async () => {
        await axiosInitial.post(`login/`, {
            'email': email,
            'password': password
        }).then(res => {
            localStorage.setItem('token', res.data.Token);
            setIsError(true);
        });

        if(isError){
            window.location.reload();
        }   
    }

    const signup = async () => {
        await axiosInitial.post(`signup/`, {
            'username': surName,
            'first_name': firstName,
            'last_name': surName,
            'email': email,
            'password': password,
        }).then(async (res) => {
            await axiosInitial.post(`login/`, {
                'email': email,
                'password': password
            }).then(res => {
                localStorage.setItem('token', res.data.Token);
                window.location.reload();
            });
        })
    }

  return (
      <>
        <Container>
            <Content>
                <div>
                    <h1>R-book</h1>
                    <span>Click You Picture or Add an Account</span>
                    <Box>
                        <img src="/images/upload.png" alt="" />
                        <span>Add Account</span>
                    </Box>
                </div>
                <div>
                    <Login>
                        <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email or Phone' name="" id="" />
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' />
                        {
                            isError && (
                                <p>Username or Password is incorrect!</p>
                            )
                        }
                        <button onClick={login}>
                            Log In
                        </button>
                        <span>Forgotten Password?</span>
                        <button onClick={e => setIsPoped(!isPoped)}>
                            Create New Account
                        </button>
                    </Login>
                    <p>
                        <b>Create a Page</b> for a celebrity, brand or business.
                    </p>
                </div>
                {
                    isPoped && (
                        <PopUp>
                            <SignUp>
                                <PopHead>
                                    <div>
                                        <h2>Sign Up</h2>
                                        <p>It's quick and easy</p>
                                    </div>
                                    <span onClick={e => setIsPoped(!isPoped)}>X</span>
                                </PopHead>
                                <Input>
                                    <div>
                                        <input onChange={e => setFirstName(e.target.value)} type="text" placeholder='First name' />
                                        <input onChange={e => setSurName(e.target.value)} type="text" placeholder='Surname' />
                                    </div>
                                    <input onChange={e => setEmail(e.target.value)} type="email" name="" placeholder='Mobile number or Email address' id="" />
                                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder='New Password' />

                                    <div>
                                    </div>
                                </Input>
                                <Choice>
                                    <p>Date of birth</p>
                                    <div>
                                        <select name="date" id="">
                                            <option value="#">1</option>
                                            <option value="#">2</option>
                                            <option value="#">3</option>
                                        </select>

                                        <select name="date" id="">
                                            <option value="#">Jan</option>
                                            <option value="#">Feb</option>
                                            <option value="#">Mar</option>
                                        </select>

                                        <select name="date" id="">
                                            <option value="#">2021</option>
                                            <option value="#">2020</option>
                                            <option value="#">2019</option>
                                        </select>
                                    </div>
                                </Choice>

                                <Choice2>
                                    <p>Gender</p>
                                    <div>
                                        <button onClick={e => {
                                            document.getElementById("male").click();
                                            console.log(e.target.value)
                                        }}>
                                            Female<input type="radio" id="male" value="Female" name="gender" />
                                        </button>

                                        <button onClick={e => {
                                            document.getElementById("female").click();
                                            console.log(e.target.value)
                                        }}>
                                            Male<input type="radio" id="female" value="Male" name="gender" />
                                        </button>

                                        <button onClick={e => {
                                            document.getElementById("custom").click();
                                            console.log(e.target.value)
                                        }}>
                                            Custom<input type="radio" id="custom" value="Custom" name="gender" />
                                        </button>
                                    </div>
                                </Choice2>

                                <p>
                                    By clicking Sign Up, you agree to our <a href="#t">Terms</a>, <a href="#e">Data Policy</a> and <a href="#w">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time
                                </p>

                                <div>
                                    <Submit onClick={signup}>
                                        Sign Up
                                    </Submit>
                                </div>
                            </SignUp>
                        </PopUp>
                    )
                }
            </Content>
        </Container>
      </>
  );
}

export default LogSignUp;


const Container = styled.div`
    background-color: #f5f6f7;
`

const Content = styled.div`
    display: flex;
    padding: 0 50px;
    height: 100vh;
    justify-content: space-around;
    align-items: center;

    &>div:first-child{
        margin-bottom: 50px;
        h1{
            color: #1876f2;
        }

        &>span{
            color: gray;
            font-size: .8rem;
        }
    }
    &>div:last-child{
        margin-right: 0;

        &>p{
            margin-top: 30px;
            color: gray;
            &>b{
                color: #5c5959;
                cursor: pointer;
            }
        }
    }
`

const Box = styled.div`
    border: 1px solid gray;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    height: 200px;
    border: 2px solid white;
    border-radius: 5px;
    transition: 0.8s;
    cursor: pointer;
    -webkit-box-shadow: -1px -1px 7px 1px rgba(0,0,0,0.62); 
    box-shadow: -1px -1px 7px 1px rgba(0,0,0,0.62);

    &>img{
        margin-top: 25%;
        width: 50px;
    }
    
    &>span{
        display: flex;
        justify-content: center;
        padding: 10px 0;
        margin-top: auto;
        color: #1876f2;
        background-color: white;
        width: 100%;
        font-size: 1.1rem;
    }
    
    &:hover{
        -webkit-box-shadow: -1px -1px 33px 5px rgba(0,0,0,0.67); 
        box-shadow: -1px -1px 33px 5px rgba(0,0,0,0.67);

    }
`

const Login = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px 20px;
    -webkit-box-shadow: -1px -1px 13px 0px rgba(0,0,0,0.66); 
    box-shadow: -1px -1px 13px 0px rgba(0,0,0,0.66);
    border-radius: 10px;

    &>input{
        margin-bottom: 20px;
        width: 350px;
        background-color: white;
        border: none;
        height: 45px;
        outline: none;
        padding: 5px 10px;
        border-radius: 10px;
        -webkit-box-shadow: 1px 0px 12px -2px rgba(0,0,0,0.56); 
        box-shadow: 1px 0px 12px -2px rgba(0,0,0,0.56);

        &:focus{
            border: 1.5px solid #1876f2;
        }
    }

    &>button{
        background-color: #1876f2;
        height: 45px;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1.2rem;
        cursor: pointer;
    }

    &>span{
        display: flex;
        justify-content: center;
        margin: 10px 0;
        color: #1876f2;
        font-weight: bold;
        font-size: .8rem;
        padding-bottom: 20px;
        border-bottom: 1px solid gray;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            color: #59d610;
        }
    }

    &>p{
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 10px;
        font-size: 0.8rem;
        color: crimson;
    }

    &>button:last-child{
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        padding: 0 5px;
        background-color: #59d610;
        width: 60%;
        font-size: 1.1rem;
    }
`

const PopUp = styled.div`
    background-color: #ffffff7f;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`



const SignUp = styled.div`
    background-color: white;
    -webkit-box-shadow: 1px 0px 12px -2px rgba(0,0,0,0.56); 
    box-shadow: 1px 0px 12px -2px rgba(0,0,0,0.56);
    width: 33%;
    border-radius: 5px;

    &>p{
        padding: 15px;
        padding-top: 0;
        font-size: .7rem;
        font-weight: 300;

        &>a{
            color: #1876f2;
            font-weight: 500;
        }
    }

    &>div:last-child{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
`

const PopHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 13px;
    border-bottom: 1px solid #8f8e8e;

    &>div{
        &>p{
            color: #8f8e8e;
        }
    }

    &>span{
        font-weight: 500;
        font-size: 1.5rem;
        color: gray;
        cursor: pointer;

        &:hover{
            color: black;
        }
    }
`

const Input = styled.div`
    padding: 13px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;

    &>div{
        margin-bottom: 10px;
        display: flex;

        &>input{
            width: 50%;
            height: 30px;
            background-color: #f5f6f7;
            padding: 3px 5px;
            border: none;
            border: 1px solid #bdbebe;
            border-radius: 5px;
            outline: none;
            color: gray;

            &:focus{
                border: 1.5px solid #1876f2;
            }
        }

        &>input:first-child{
            margin-right: 10px;
        }
    }

    &>input{
        margin-bottom: 10px;
        height: 30px;
        background-color: #f5f6f7;
        padding: 3px 5px;
        border: none;
        border: 1px solid #bdbebe;
        border-radius: 5px;
        outline: none;
        color: gray;

        &:focus{
            border: 1.5px solid #1876f2;
        }
    }

    &>input:last-child{
        margin-bottom: 0;
    }
`

const Choice = styled.div`
    padding: 13px;
    padding-top: 0;

    &>p{
        color: gray;
        font-size: .8rem;
        
    }

    &>div{
        width: 100%;
        display: flex;
        justify-content: space-between;

        &>select{
            width: 30%;
            height: 35px;
            padding: 3px 5px;
            border: 1px solid #bdbebe;
            color: #3b3b3b;
            outline: none;
            border-radius: 5px;
        }
    }
`

const Choice2 = styled.div`
    padding: 13px;
    padding-top: 0;

    &>p{
        color: gray;
        font-size: .8rem;
    }

    &>div{
        width: 100%;
        display: flex;
        justify-content: space-between;

        &>button{
            width: 30%;
            height: 30px;
            padding: 15px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #bdbebe;
            cursor: pointer;
            border-radius: 5px;
            background-color: #f5f6f7;
            color: #5a5a5a;
        }
    }
`

const Submit = styled.button`
    width: 40%;
    height: 40px;
    margin-top: 10px;
    background-color: #06cf06;
    border: none;
    color: white;
    font-size: 1.1rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
`