import React from 'react';
import styled from 'styled-components';

function LogSignUp() {
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
                        <input type="text" placeholder='Email or Phone' name="" id="" />
                        <input type="password" placeholder='Password' />
                        <button>
                            Log In
                        </button>
                        <span>Forgotten Password?</span>
                        <button>
                            Create New Account
                        </button>
                    </Login>
                    <p>
                        <b>Create a Page</b> for a celebrity, brand or business.
                    </p>
                </div>
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