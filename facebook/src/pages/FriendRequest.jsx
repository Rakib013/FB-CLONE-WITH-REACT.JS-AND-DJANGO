import React from 'react';
import styled from 'styled-components';
import {useGlobalState} from '../state/provider';


function FriendRequest() {
    const [{profile}] = useGlobalState();
  return (
    <>
        <Container>
            <h3>
                Friend Requests
            </h3>
            <Content>
                {
                    profile?.requestedFriend?.map(friend => (
                        <Box>
                            <img src="/images/profile.jpg" alt="" />
                            <div>
                                <h3>Rakibul Islam</h3>
                                <button>Confirm</button>
                                <button>Delete</button>
                            </div>
                        </Box>
                    ))
                }
                <Box>
                    <img src="/images/profile.jpg" alt="" />
                    <div>
                        <h3>Rakibul Islam</h3>
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </Box>

                <Box>
                    <img src="/images/profile.jpg" alt="" />
                    <div>
                        <h3>Rakibul Islam</h3>
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </Box>

                <Box>
                    <img src="/images/profile.jpg" alt="" />
                    <div>
                        <h3>Rakibul Islam</h3>
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </Box>

                <Box>
                    <img src="/images/profile.jpg" alt="" />
                    <div>
                        <h3>Rakibul Islam</h3>
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </Box>

                
            </Content>
        </Container>
    </>
  )
}

export default FriendRequest;

const Container = styled.div`
    padding: 50px;
    &>h3{
        color: white;
        font-weight: 300;
    }
`

const Content = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    justify-content: flex-start;
`


const Box = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    background-color: #1c1e21;
    border-radius: 8px;
    &>img{
        border-radius: 8px 8px 0 0;
        max-width: 100%;
        height: 180px;
        object-fit: cover;
    }

    &>div{
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        text-align: center;

        &>h3{
            color: white;
            font-weight: 300;
            margin-bottom: 10px;
        }
        &>button{
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            border: none;
            color: white;
            background-color: #0a66c2;
            border-radius: 3px;
            padding: 5px 0;
            font-size: 16px;
            margin-bottom: 10px;
            cursor: pointer;
        }

        &>button:last-child{
            background-color: #25282c;
            transition: 0.4s;

            &:hover{
                color: red;
            }
        }
    }
`
