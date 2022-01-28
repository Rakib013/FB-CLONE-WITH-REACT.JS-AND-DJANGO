import React from 'react';
import styled from 'styled-components';

function PostView() {
  return (
      <>
        <Container>
            <Content>
                <IMG>
                    <img src="/images/profile.jpg" alt="" />
                </IMG>

                <Desc>
                    <div>
                        <img src="/images/menu.png" alt="" />
                        <img src="/images/mesenger.png" alt="" />
                        <img src="/images/notification.png" alt="" />
                        <img src="/images/fbarrow.png" alt="" />
                    </div>

                    <Post>
                        <div>
                            <div>
                                <img src="/images/profile.jpg" alt="" />
                                <div>
                                    <h5>Rakibul Islam</h5>
                                    2h. <img src="/images/lact.png" alt="" />
                                </div>
                            </div>
                            <img src="/images/thd.png" alt="" />
                        </div>
                        <p>Onek Valo lage ei jagata. One day i will come here with you.</p>
                        <Action>

                        </Action>
                    </Post>
                </Desc>
            </Content>
        </Container>
      </>
  );
}

export default PostView;

const Container = styled.div``

const Content = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
`

const IMG = styled.div`
    background-color: black;
    height: 820px;
    display: flex;
    justify-content: center;
    align-items: center;


    &>img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Desc = styled.div`
    &>div:first-child{
        &>img:first-child{
            margin-left: 180px;
            margin-right: 10px;
        }
        &>img{
            width: 30px;
            height: 30px;
            margin-right: 10px;
            cursor: pointer;
        }

        &>img:last-child{
            background-color: white;
            border-radius: 50%;
        }
        border-bottom: 1px solid gray;
        padding: 5px;
        
    }
`

const Post = styled.div`
    padding: 13px;
    &>div{
        display: flex;
        justify-content: space-between;
        &>div{
            display: flex;
            color: var(--font-color);
            &>img{
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 15px;
            }
            
            &>div{
                &>h5{
                    color: white;
                }
                &>img{
                    width: 20px;
                    height: 20px;
                    margin-left: 3px;
                }
            }
        }

        &>img{
            height: 30px;
            background-color: white;
            border-radius: 50%;
        }
    }

    &>p{
        padding: 5px;
        color: #c0bebe;
        font-size: 14px;
    }
`

const Action = styled.div`
    
`