import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Nav() {
    const [isDrop, setIsDrop] = useState(false);
    const [isDark, setIsDark] = useState(false);
    return (
      <>
        <Container>
            <Left>
                <Link to="/">
                    <Logo src="/images/fk.png" alt="" />
                </Link>
                <SearchBox>
                    <img src="/images/search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </SearchBox>
            </Left>
            <Center>
                <div>
                    <Icon src="/images/hm.png" alt="" />
                </div>

                <div>
                    <Icon src="/images/friends.png" alt="" />
                </div>

                <div>
                    <Icon src="/images/wt.png" alt="" />
                </div>
            </Center>
            <Right>
                <Link to="/profile">
                    <User>
                        <img src="/images/profile.jpg" alt="" />
                        <span>Rakibul</span>
                    </User>
                </Link>

                <Dropdown drop={false}>
                    <img src="/images/notification.png" alt="" />
                </Dropdown>

                <Dropdown onClick={e => setIsDrop(!isDrop)} drop={true}>
                    <img src="/images/fbarrow.png" alt="" />
                </Dropdown>
            </Right>
            {
                isDrop && (
                    <Settings open={isDrop}>
                        <Dark dark={isDark} onClick={e => setIsDark(!isDark)}>
                            <span></span>
                        </Dark>

                        <SetUser>
                            <img src="/images/profile.jpg" alt="" />
                            <div>
                                <p>Rakibul Islam</p>
                                <h6>See Your Profile</h6>
                            </div>
                        </SetUser>
                        <FeedBack>
                            <img src="/images/feedback.png" alt="" />
                            <div>
                                <p>Give Us Your Feedback</p>
                                <h6>Help us improve R-Book</h6>
                            </div>
                        </FeedBack>
                        <Action>
                            <div>
                                <img src="/images/setting.png" alt="" />
                                <h5>Settings & privacy</h5>
                            </div>
                            <img src="/images/arrow.png" alt="" />
                        </Action>

                        <Action>
                            <div>
                                <img src="/images/help.png" alt="" />
                                <h5>Help & Support</h5>
                            </div>
                            <img src="/images/arrow.png" alt="" />
                        </Action>

                        <Action>
                            <div>
                                <img src="/images/display.png" alt="" />
                                <h5>Display & Accesibility</h5>
                            </div>
                            <img src="/images/arrow.png" alt="" />
                        </Action>

                        <Action>
                            <div>
                                <img src="/images/logout.png" alt="" />
                                <h5>Logout</h5>
                            </div>
                        </Action>
                    </Settings>
                )
            }
        </Container>
      </>
  );
}

export default Nav;


const Container = styled.div`
    background: var(--nav-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
    position: sticky;
    top: 0;
    z-index: 100;
`

const Left = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    cursor: pointer;   
    width: 50px;
    margin-right: 15px;
    border: 1px solid #acc6e0;
    border-radius: 50%;

    @media screen and (max-width: 1100px){
        margin-right: 10px;
    }
`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background: var(--bg-color);
    width: 250px;
    border-radius: 60px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    &>img{
        width: 18px;
    }

    &>input{
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        padding: 8px;
    }

    @media screen and (max-width: 1050px){
        display: none;
    }
`

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>div{
        width: 50px;
        margin-right: 80px;
        height: 50px;
        display: flex;
        justify-content: center;
        background-color: #f0eaea;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 900px){
            margin-right: 30px;
        }
    }
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`

const Right = styled.div`
    display: flex;
`

const User = styled.div`
    display: flex;
    align-items: center;
    color: white;
    background-color: #30505f;
    padding: 0px 10px 0px 2px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    &>img{
        margin-right: 5px;
        width: 40px;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
    }

    &:hover{
        background-color: #6d8a8a;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`

const Dropdown = styled.div`
  margin-left: 15px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.drop ? '#f8f0f0' : '#3d3737'};
  cursor: pointer;
  transition: 0.4s;

  &>img{
    width: ${props => props.drop ? '15px' : '30px'};
    height: ${props => props.drop ? '15px' : '30px'};
  }

  &:hover{
    background-color: ${props => props.drop ? '#b3aeae' : '#131111'};
  }

  @media screen and (max-width: 900px){
        display: ${props => props.drop ? '' : 'none'};
    }
`

const Settings = styled.div`
    position: absolute;
    width: 90%;
    max-width: 350px;
    max-height: auto;
    background: #fff;
    right: 5%;
    top: 62px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 0 0 10px 10px;
`

const Dark = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 45px;
    background: ${props => props.dark ? '#1876f2' : '#30505f'};
    width: 45px;
    border-radius: 15px;
    padding: 2px 3px;
    cursor: pointer;
    display: flex;

    &>span{
        width: 18px;
        height: 18px;
        background: #fff;
        border-radius: 50%;
        margin-left: ${props => props.dark ? 'auto' : '0'};
        transition: margin 0.3s;
    }
    transition: background 0.3s;
`

const SetUser = styled.div`
    display: flex;
    align-items: center;
    margin: 13px;
    border-radius: 33px;
    color: #0a0909;
    &>img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }

    &>div{
        &>h6{
            color: #0a66c2;
        }
    }
`

const FeedBack = styled.div`
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 5px 0;
    display: flex;
    align-items: center;
    margin: 13px;
    cursor: pointer;
    transition: 0.4s;
    &>img{
        width: 40px;
        margin-right: 15px;
    }

    &>div{
        &>p{
            font-weight: 400;
        }
        &>h6{
            color: #0a66c2;
        }
    }

    &:hover{
        background-color: #dae1fa;
        border-radius: 40px;
    }
`

const Action = styled.div`
    margin: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px;
    transition: 0.3s;
    color: #626262;
    &>div{
        &>img{
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }
        display: flex;
        align-items: center;
    }
    &>img{
        width: 10px;
        margin-right: .5rem;
        transition: 0.3s;
    }

    &:hover{
        background-color: #efefef;
        border-radius: 50px;

        &>img{
            transform: translateX(.25rem);
        }
    }
`