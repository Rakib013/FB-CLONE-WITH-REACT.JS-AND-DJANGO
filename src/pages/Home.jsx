import React from 'react';
import styled from 'styled-components';
import Story from '../components/Story';
import Post from '../components/Post';
import Room from '../components/Room';
import Feed from '../components/Feed';



function Home() {
    return (
        <>
            <Container>
                <Left>
                    <User>
                        <img src="/images/profile.jpg" alt="" />
                        <span>Rakibul Islam</span>
                    </User>
                    <Links>
                        <a href="#news"><img src="/images/lt.png" alt="" />Latest News</a>
                        <a href="#friends"><img src="/images/friends.png" alt="" />Friends</a>
                        <a href="#group"><img src="/images/grp.png" alt="" />Group</a>
                        <a href="#market"><img src="/images/marketplace.png" alt="" />Marketplace</a>
                        <a href="#watch"><img src="/images/wt.png" alt="" />Watch</a>
                        <a href="#watch"><img src="/images/bok.png" alt="" />Saved</a>
                    </Links>
                    <button>
                        <div>
                            <img src="/images/arrdown.png" alt="" />
                        </div>
                        See More
                    </button>

                    <ShortCut>
                        <p>Your Shortcuts</p>
                        <a href="#shortcut">
                            <img src="/images/shortcut-1.png" alt="" />
                            Web Developer
                        </a>

                        <a href="#shortcut">
                            <img src="/images/shortcut-2.png" alt="" />
                            Frontend Developer
                        </a>

                        <a href="#shortcut">
                            <img src="/images/shortcut-3.png" alt="" />
                            Backend Developer
                        </a>

                        <a href="#shortcut">
                            <img src="/images/shortcut-4.png" alt="" />
                            FullStack Developer
                        </a>
                    </ShortCut>
                </Left>
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
                    <Post />
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
                <Right>
                    <div>
                        <Title>
                            <h4>Events</h4>
                            <a href="#see-more">See All</a>
                        </Title>
                        
                        <Event>
                            <LeftEvent>
                                <h3>18</h3>
                                <span>March</span>
                            </LeftEvent>
                            <RightEvent>
                                <h4>Social Media</h4>
                                <p><img src="/images/lact.png" alt="" />Willson Tech Park</p>
                                <a href="#more-info">More Info</a>
                            </RightEvent>
                        </Event>

                        <Event>
                            <LeftEvent>
                                <h3>20</h3>
                                <span>March</span>
                            </LeftEvent>
                            <RightEvent>
                                <h4>Mobile Marketing</h4>
                                <p> <img src="/images/lact.png" alt="" /> Willson Tech Park</p>
                                <a href="#more-info">More Info</a>
                            </RightEvent>
                        </Event>

                        <Title>
                            <h4>Advertisement</h4>
                            <a href="#see-more">Close</a>
                        </Title>

                        <Ads src="/images/advertisement.png" alt="" />

                        <Title>
                            <h4>Contacts</h4>
                            <div>
                                <img src="/images/vd.gif" alt="" />
                                <img src="/images/sach.png" alt="" />
                                <img src="/images/thd.png" alt="" />

                                {/* <a href="#see-more">Hide Chat</a> */}
                            </div>
                        </Title>

                        <Onlines>
                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/member-1.png" alt="" />
                                </div>
                                <p>Sagor Ahammed Munna</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/fahimun.jpeg" alt="" />
                                </div>
                                <p>Fahimun Islam Lamia</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/member-1.png" alt="" />
                                </div>
                                <p>Nur Jahan</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/nushrat.jpeg" alt="" />
                                </div>
                                <p>Nushrat Jahan</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/member-1.png" alt="" />
                                </div>
                                <p>Sagor Ahammed Munna</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/fahimun.jpeg" alt="" />
                                </div>
                                <p>Fahimun Islam Lamia</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/member-1.png" alt="" />
                                </div>
                                <p>Nur Jahan</p>
                            </Online>

                            <Online>
                                <div>
                                    <div></div>
                                    <img src="/images/nushrat.jpeg" alt="" />
                                </div>
                                <p>Nushrat Jahan</p>
                            </Online>
                        </Onlines>
                    </div>
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
    flex-basis: 25%;
    height: calc(100vh - 70px);
    position: sticky;
    overflow-y: scroll;
    top: 70px;
    color: #fff;

    &>button{
        background-color: var(--body-color);
        padding-left: 13px;
        display: flex;
        align-items: center;
        border: none;
        color: #1876f2;
        cursor: pointer;
        font-weight: 500;
        
        &>div{
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            border-radius: 50%;
            background-color: #cac7c7;
            &>img{
                width: 24px;
                transition: 0.4s;
            }
            margin-right: 15px;
        }

        &:hover{
            &>div{
                &>img{
                    transform: translateY(.25rem);
                }
            }
        }
    }
`

const Links = styled.div`
    padding-left: 13px;
    &>a{
        text-decoration: none;
        padding: 10px;
        transition: 0.4s;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: #626262;
        width: 90%;
        &>img{
            width: 25px;
            margin-right: 15px;
        }
        
        &:hover{
            background-color: white;
            border-radius: 20px;

        }
    }

`

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    width: 90%;
    padding: 3px 0px 3px 2px;
    margin-left: 13px;
    transition: 0.4s;
    &>img{
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }
    
    &:hover{
        background-color: white;
        border-radius: 20px;
    }

    &:hover{
        color: #1876f2;
    }
`

const ShortCut = styled.div`
    margin-top : 20px;
    border-top: 2px solid white;
    display: flex;
    flex-direction: column;

    &>p{
        margin: 25px 0;
        margin-left: 13px;
        font-weight: 500;
        font-size: 1.3rem;
        color: #626262;
    }

    &>a{
        margin-top: 25px;
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: 13px;
        color: #626262;
        padding: 3px 8px;
        width: 85%;
        transition: 0.4s;
        
        &>img{
            width: 50px;
            border-radius: 50%;
            margin-right: 15px;
        }
        
        &:hover{
            background-color: white;
            border-radius: 30px;
        }
    }
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

const Right = styled.div`
    flex-basis: 25%;
    background-color: var(--bg-color);
    border-radius: 10px;
    height: calc(100vh - 70px);
    overflow-y: scroll;
    position: sticky;
    top: 72px;
    margin-right: 50px;
    margin-left: 20px;
    color: var(--font-color);

    &>div{
        border-radius: 10px;
    }
`


const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    &>h4{
        font-weight: 600;
    }

    &>a{
        text-decoration: none;
        color: #1876f2;
    }

    &>div{
        display: flex;
        align-items: center;
        &>img{
            width: 25px;
            margin-right: 20px;
            cursor: pointer;
            background-color: white;
            border: 2px solid #1876f2;
            padding: 3px;
            border-radius: 50%;
        }

        &>img:last-child{
            margin-right: 0;
        }
    }
`

const Event = styled.div`
    display: flex;
    font-size: 14px;
    margin-left: 20px;
    padding-bottom: 20px;
`

const LeftEvent = styled.div`
    display: flex;
    border: 0.05px solid #424141;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 65px;
    border-radius: 10px;
    margin-right: 30px;
    padding-top: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    box-sizing: border-box;

    &>h3{
        margin-bottom: 30px;
    }

    &>span{
        position: absolute;
        background: #1876f2;
        bottom: 0;
        padding-top: 3px;
        left: 0;
        width: 100%;
        color: white;
    }
`

const RightEvent = styled.div`
    &>a{
        font-size: 12px;
        color: #1876f2;
    }

    &>p{
        display: flex;
        align-items: center;
        &>img{
            margin-right: 8px;
            width: 20px;
        }
    }
`

const Ads = styled.img`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 4px;
`

const Onlines = styled.div``

const Online = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: 0.4s;

    &>div{
        position: relative;
        &>img{
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        &>div{
            right: 15px;
            width: 10px;
            height: 10px;
            border: 1.2px solid white;
            background-color: #1876f2;
            position: absolute;
            border-radius: 50%;
        }
    }

    &:hover{
        color: #1876f2;
    }
`