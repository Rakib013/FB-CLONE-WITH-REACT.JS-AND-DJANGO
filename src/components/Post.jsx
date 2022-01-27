import React from 'react';
import styled from 'styled-components';

function Post() {
  return (
    <>
        <Container>
            <Content>
                <div>
                    <img src="/images/profile.jpg" alt="" />
                    <button>What's on your mind, Rakibul?</button>
                </div>
                <Last>
                    <Button>
                        <img src="/images/vd.gif" alt="" />
                        Live Video
                    </Button>

                    <Button>
                        <img src="/images/pt.png" alt="" />
                        Photos/Videos
                    </Button>

                    <Button>
                        <img src="/images/feel.png" alt="" />
                        Feeling/Activity
                    </Button>
                </Last>
            </Content>
        </Container>
    </>
  );
}

export default Post;


const Container = styled.div`
    margin-left: 10px;
    background-color: var(--bg-color);
    border-radius: 10px;
    color: var(--font-color);
`

const Content = styled.div`
    padding: 13px 13px;
    &>div{
        display: flex;
        align-items: center;
        &>img{
            width: 45px;
            border-radius: 50%;
        }
        &>button{
            margin-left: 15px;
            padding: 10px 3px 10px 3px;
            width: 680px;
            border-radius: 30px;
            background-color: transparent;
            border: 2px solid #1876f2;
            font-size: 1.02rem;
            color: #1876f2;
            transition: 0.4s;
            cursor: pointer;

            &:hover{
                color: #fff;
                background-color: #1876f2;
            }
        }
    }
`

const Last = styled.div`
    border-top: 1px solid #1876f2;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Button = styled.div`
    margin-top: 3px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    padding: 10px;
    transition: 0.4s;
    cursor: pointer;
    &>img{
        margin-right: 10px;
        width: 30px;
    }

    &>img:first-child{
        background-color: white;
        border-radius: 50%;
        border: 3px solid #1876f2;
    }

    &:hover{
        background-color: #cee1fa;
    }
`