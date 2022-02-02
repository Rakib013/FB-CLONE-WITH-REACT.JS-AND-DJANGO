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
                <Left>
                    <LeftSideBar />
                </Left>
                <Center>
                    <div>
                        <First className='first'>
                            <img src="/images/profile.jpg" alt="" />
                            <div>
                                <img src="/images/upload.png" alt="" />
                                <p>Create Post</p>
                            </div>
                        </First>
                        <Story stle={false} image="/images/nushrat.jpeg" status="/images/status-1.png" info="Harry" />
                        <Story className='third' image="/images/status-3.png" status="/images/status-2.png" info="Potter" />
                        <Story className='fourth' image="/images/fahimun.jpeg" status="/images/status-3.png" info="Harry" />
                        <Story className='fiveth' image="/images/status-2.png" status="/images/status-4.png" info="Potter" />
                        <Story className='last' image="/images/status-4.png" status="/images/nushrat.jpeg" info="Harry" />
                    </div>
                    <Post profile={false} />
                    <Room />

                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/profile.jpg" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/feed-image-3.png" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/feed-image-4.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-5.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-1.png" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/feed-image-3.png" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/feed-image-4.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-5.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-1.png" />
                    <Feed name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/feed-image-3.png" />
                    <Feed name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/feed-image-4.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-5.png" />
                    <Feed name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/feed-image-1.png" />
                </Center>
                <Right>
                    <RightSideBar />
                </Right>
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

const Left = styled.div`
    flex-basis: 20%;

    @media screen and (max-width: 1000px){
        display: none;
    }
`

const Center = styled.div`
    background-color: var(--body-color);
    flex-basis: 47%;

    &>div:first-child{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;
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

const Right = styled.div`
    flex-basis: 25%;

    @media screen and (max-width: 1100px){
        display: none;
    }
`