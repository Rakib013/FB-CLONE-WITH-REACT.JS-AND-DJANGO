import React from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import Room from '../components/Room';
import Feed from '../components/Feed';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import {useGlobalState} from '../state/provider';



function Home() {
    const [{profile, posts}] = useGlobalState();

    return (
        <>
            <Container>
                <Left>
                    <LeftSideBar />
                </Left>
                <Center>
                    <div>
                        <First className='first'>
                            <img src={`http://127.0.0.1:8000${profile.profile}`} alt="" />
                            <div>
                                <img src="/images/upload.png" alt="" />
                                <p>Create Post</p>
                            </div>
                        </First>
                        <Story stle={false} image="/images/status-1.png" status="/images/status-1.png" info="Harry" />
                        <Story className='third' image="/images/status-3.png" status="/images/status-2.png" info="Potter" />
                        <Story className='fourth' image="/images/fahimun.jpeg" status="/images/status-3.png" info="Harry" />
                        <Story className='fiveth' image="/images/status-2.png" status="/images/status-4.png" info="Potter" />
                        <Story className='last' image="/images/status-4.png" status="/images/nushrat.jpeg" info="Harry" />
                    </div>
                    <Post profiles={false} />
                    <Room />

                    {
                        posts?.map((data, index) => (
                            <Feed key={index} id={data.id} name={data.profile.first_name + data.profile.last_name} react={data.react} reacted={data.reacted[0]} objct={data?.reacted} desc={data.title} profle={`http://127.0.0.1:8000${data.profile.profile}`} owner={data.profile.id} post={`http://127.0.0.1:8000${data.post}`} />
                        ))
                    }
                    
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