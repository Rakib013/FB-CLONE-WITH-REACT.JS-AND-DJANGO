import React from 'react';
import styled from 'styled-components';

function Room() {
  return (
    <>
        <Container>
            <Content>
                <Box>
                    <img src="/images/rm.png" alt="" />
                    <h5>Rakibul's Room</h5>
                    <span>Get Started</span>
                    <button>Create Room</button>
                </Box>

                <Box>
                    <img src="/images/fahimun.jpeg" alt="" />
                    <h5>Fahimun Islam Lamia</h5>
                    <button>Say Hi</button>
                </Box>

                <Box>
                    <img src="/images/nushrat.jpeg" alt="" />
                    <h5>Nushrat Jahan</h5>
                    <button>Say Hi</button>
                </Box>

                <Box>
                    <img src="/images/status-1.png" alt="" />
                    <h5>Sagor Ahammed Munna</h5>
                    <button>Say Hi</button>
                </Box>
            </Content>
        </Container>
    </>
  );
}

export default Room;

const Container = styled.div`
    margin-top: 20px;
    margin-left: 13px;
    padding: 13px;
    background-color: white;
    border-radius: 10px;
`

const Content = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

const Box = styled.div`
    border: 1px solid #9d9fa1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;
    transition: 0.4s;
    cursor: pointer;
    &>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    &>button{
        margin-top: 10px;
        background-color: transparent;
        border: 0.5px solid #0a66c2;
        padding: 3px;
        border-radius: 5px;
        width: 150px;
        cursor: pointer;
        color: #0a66c2;
        transition: 0.4s;
        
        &:hover{
            background-color: white;
        }
    }

    &:hover{
        background-color: #efefef;
    }
`