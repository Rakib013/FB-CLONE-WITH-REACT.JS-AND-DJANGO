import React from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import Room from '../components/Room';
import Feed from '../components/Feed';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';



function Home() {
    return (
        <>
            <Container>
                <LeftSideBar />
                <Center>
                    <div>
                        <First>
                            <img src="/images/profile.jpg" alt="" />
                            <div>
                                <img src="/images/upload.png" alt="" />
                                <p>Create Post</p>
                            </div>
                        </First>
                        <Story image="/images/nushrat.jpeg" status="/images/status-1.png" info="Harry" />
                        <Story image="/images/status-3.png" status="/images/status-2.png" info="Potter" />
                        <Story image="/images/fahimun.jpeg" status="/images/status-3.png" info="Harry" />
                        <Story image="/images/status-2.png" status="/images/status-4.png" info="Potter" />
                        <Story image="/images/status-4.png" status="/images/nushrat.jpeg" info="Harry" />
                    </div>
                    <Post profile={false} />
                    <Room />

                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                </Center>
                <RightSideBar />
            </Container>
        </>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    padding: 13px 0;
    align-self: flex-start;
`

const Center = styled.div`
    background-color: var(--body-color);
    flex-basis: 47%;

    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>button{
            border: none;
            background-color: white;
            padding: 10px;
            display: flex;
            height: 40px;
            width: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            margin-bottom: 20%;
            &>img{
                width: 10px;
            }
        }
    }
`

const First = styled.div`
    height: 250px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &>img{
        border-radius: 10px;
        height: 250px;
        width: 120px;
        position: relative;
        object-fit: cover;
        transition: 0.4s;
    }

    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 18%;
        margin-top: 80px;
        padding-left: 0px;
        position: absolute;
        margin-left: 8px;

        &>img{
            width: 30px;
            height: 30px;
            object-fit: cover;
            border: 3px solid #0a66c2;
            border-radius: 50%;
        }

        &>p{
            margin-left: 0px;
            color: white;
        }
    }

    &:hover{
        &>img{
            transform: scale(1.05);
        }
    }
`