import React from 'react';
import styled from 'styled-components';

function Profile() {
  return (
    <>
        <Container>
            <Cover src="/images/cover.png" />
            <User>
                <img src="/images/profile.jpg" alt="" />
                <span></span>
            </User>

            <Details>
                <div>
                    <h1>Rakibul Islam</h1>
                    <h4>293 friends, 57 mutual friends</h4>
                    <div>
                        <img src="/images/profile.png" alt="" />
                        <img src="/images/profile.jpg" alt="" />
                        <img src="/images/nushrat.jpeg" alt="" />
                        <img src="/images/fahimun.jpeg" alt="" />
                        <img src="/images/profile.png" alt="" />
                        <img src="/images/status-1.png" alt="" />
                        <img src="/images/nushrat.jpeg" alt="" />
                        <img src="/images/fahimun.jpeg" alt="" />
                    </div>
                </div>
                <div>
                    <button><img src="/images/create.png" alt="" /> Add To Story</button>
                    <button><img src="/images/edit.gif" alt="" /> Edit Profile</button>
                </div>
            </Details>

            <Action>
                <div>
                    Posts
                </div>

                <div>
                    About
                </div>

                <div>
                    Friends
                </div>

                <div>
                    Photos
                </div>

                <div>
                    Videos
                </div>

                <div>
                    Check-ins
                </div>

                <div>
                    More
                </div>

                <img src="/images/thd.png" alt="" />
            </Action>
            
        </Container>

        <Bottom>
            <Content>
                <Left></Left>
                <Right></Right>
            </Content>
        </Bottom>


    </>
  );
}

export default Profile;

const Container = styled.div`
    padding: 0 15%;
    position: relative;
    background: #fff;
`

const Cover = styled.img`
    width: 100%;
    border-radius: 6px;
`

const User = styled.div`
    top: 280px;
    left: 15%;
    border-radius: 50%;
    position: absolute;
    &>img{
        border: 3px solid #1876f2;
        position: relative;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
    }
    &>span{
        position: absolute;
        bottom: 10px;
        right: 30px;
        width: 20px;
        height: 20px;
        background-color: #1ff218;
        border-radius: 50%;
        border: 2px solid #f2ee18;
    }
`

const Details = styled.div`
    border-radius: 20px;
    background-color: #2a2a2b;
    border: 25px;
    padding-left: 10px;
    margin-left: 20%;
    display: flex;

    &>div{
        &>h1{
            color: #fff;
        }

        &>h4{
            color: #9e9c9c;
        }
        &>div{
            
            &>img{
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
                border: 1px solid #454546;
                cursor: pointer;
            }
        }
    }

    &>div:last-child{
        margin-left: auto;
        margin-right: 20px;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;

        &>button{
            display: flex;
            align-items: center;
            margin-right: 15px;
            padding: 8px 10px;
            border-radius: 20px;
            background-color: #1876f2;
            color: white;
            border: none;
            cursor: pointer;

            &>img{
                width: 20px;
                margin-right: 10px;
            }
        }

        &>button:last-child{
            background-color: #fff;
            color: black;
            margin-right: 0px;
        }
    }
`

const Action = styled.div`
    margin-top: 10px;
    padding-top: 5px;
    border-top: .5px solid #0a66c2;
    border-bottom: .5px solid #0a66c2;
    display: flex;
    padding-left: 13px;
    padding-bottom: 10px;

    &>div{
        display: flex;
        align-items: center;
        margin-right: 20px;
        border-radius: 20px;
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.4s;
        
        &:hover{
            background-color: #494949;
            color: white;
        }
    }

    &>img{
        margin-left: auto;
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
`

const Bottom = styled.div`
    background-color: var(--bg-color);
`

const Content = styled.div``

const Left = styled.div``

const Right = styled.div``