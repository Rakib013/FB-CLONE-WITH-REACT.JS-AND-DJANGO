import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import Feed from '../components/Feed';

function Profile({ user, isFriend, isRequested }) {
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

                {
                    user ? (
                        <div>
                            <button><img src="/images/create.png" alt="" /> Add To Story</button>
                            <button><img src="/images/edit.gif" alt="" /> Edit Profile</button>
                        </div>
                    ) : (
                        <div>
                        {
                            isFriend ? (
                                <button><img src="/images/comments.png" alt="" /> Friends</button>
                            ) : (
                                <>
                                    {
                                        isRequested ? (
                                            <button><img src="/images/add-friends.png" alt="" />Add Friend</button>
                                        ) : (
                                            <button><img src="/images/shr.png" alt="" />Cancle request</button>
                                        )
                                    }
                                </>
                            )
                        }
                        <button><img src="/images/mesenger.png" alt="" /> Message</button>
                        </div>
                    )
                }

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
                <Left>
                    <Intro>
                        <h3>Intro</h3>
                        <p>I just want to create a simple algorithm that can make communicate with Human brain and computers.</p>
                        <Bio>Edit Bio</Bio>
                        <ul>
                            <li> <img src="/images/profile-job.png" alt="" /> Works at Full Stack Web Developer With Django & React.js</li>
                            <li> <img src="/images/profile-job.png" alt="" />Self Taught Developer</li>
                            <li> <img src="/images/profile-study.png" alt="" /> Studies Computer Science and Engineering at East West University</li>
                            <li> <img src="/images/profile-study.png" alt="" /> Went to Patuakhali Govt Jubilee High School</li>
                            <li> <img src="/images/profile-home.png" alt="" /> Lives in Barisal</li>
                            <li> <img src="/images/profile-location.png" alt="" /> From Patuakhali, Chittagong, Bangladesh</li>
                            <li> <img src="/images/love.png" alt="" /> Single</li>
                        </ul>
                    </Intro>

                    <Gallery>
                        <div>
                            <h3>Photos</h3>
                            <p>See all</p>
                        </div>
                        <div>
                            <img src="/images/member-1.png" alt="" />
                            <img src="/images/member-2.png" alt="" />
                            <img src="/images/member-3.png" alt="" />
                            <img src="/images/fahimun.jpeg" alt="" />
                            <img src="/images/member-1.png" alt="" />
                            <img src="/images/profile.jpg" alt="" />
                            <img src="/images/member-1.png" alt="" />
                            <img src="/images/nushrat.jpeg" alt="" />
                            <img src="/images/member-3.png" alt="" />
                        </div>
                    </Gallery>

                    <Friends>
                        <div>
                            <h3>Friends</h3>
                            <p>See all friends</p>
                        </div>

                        <div>
                            <div>
                                <img src="/images/member-1.png" alt="" />
                                <span>Fahimun Islam</span>
                            </div>

                            <div>
                                <img src="/images/member-2.png" alt="" />
                                <span>Nushrat Jahan</span>
                            </div>

                            <div>
                                <img src="/images/profile.jpg" alt="" />
                                <span>Rakibul Islam</span>
                            </div>

                            <div>
                                <img src="/images/member-1.png" alt="" />
                                <span>Fahimun Islam</span>
                            </div>

                            <div>
                                <img src="/images/member-2.png" alt="" />
                                <span>Nushrat Jahan</span>
                            </div>

                            <div>
                                <img src="/images/profile.jpg" alt="" />
                                <span>Rakibul Islam</span>
                            </div>

                            <div>
                                <img src="/images/member-1.png" alt="" />
                                <span>Fahimun Islam</span>
                            </div>

                            <div>
                                <img src="/images/member-2.png" alt="" />
                                <span>Nushrat Jahan</span>
                            </div>

                            <div>
                                <img src="/images/profile.jpg" alt="" />
                                <span>Rakibul Islam</span>
                            </div>
                        </div>
                    </Friends>
                </Left>
                <Right>
                    <Post profile={true} />
                    <Feed dark={true} name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                    <Feed dark={true} name="Chris Harington" desc="Actually i don't want to write know" profile="/images/status-1.png" post="/images/profile.jpg" />
                    <Feed dark={true} name="Nick Jonas" desc="Actually i don't want to write know" profile="/images/profile.png" post="/images/nushrat.jpeg" />
                    <Feed dark={true} name="Fahimun Islam Lamiha" desc="Actually i don't want to write know" profile="/images/profile.jpg" post="/images/fahimun.jpeg" />
                </Right>
            </Content>
        </Bottom>


    </>
  );
}

export default Profile;

const Container = styled.div`
    padding: 0 15%;
    padding-bottom: 10px;
    position: relative;
    background: var(--text-color);
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
    cursor: pointer;
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
    color: var(--font-color);

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
    padding: 20px 15%;
    color: var(--font-color);
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
`

const Left = styled.div`
`

const Intro = styled.div`
    background-color: var(--txt-color);
    border-radius: 10px;
    padding: 10px;

    &>h3{
        color: #fff;
        margin-bottom: 15px;
    }

    &>p{
        text-align: center;
    }

    &>ul{
        list-style: none;
        &>li{
            display: flex;
            align-items: flex-start;
            padding: 5px;

            &>img{
                width: 25px;
                margin-right: 10px;
            }
        }
    }
`

const Bio = styled.button`
    width: 100%;
    background-color: #363636;
    margin: 15px;
    margin-left: -2px;
    padding: 10px 5px;
    border-radius: 10px;
    border: none;
    color: #959697;
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        background-color: #504f4f;
    }
`

const Right = styled.div`
    position: sticky;
    overflow-y: scroll;
    height: 190vh;
`

const Gallery = styled.div`
    margin-top: 10px;
    background-color: var(--txt-color);
    padding: 10px;
    border-radius: 10px;

    &>div{
        display: flex;
        justify-content: space-between;
        &>h3{
            color: #fff;
        }

        &>p{
            color: #1876f2;
            cursor: pointer;
        }
    }

    &>div:last-child{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        margin-top: 10px;

        &>img{
            width: 105px;
            height: 120px;
            border-radius: 5px;
            object-fit: cover;
            cursor: pointer;
        }
    }
`

const Friends = styled.div`
    margin-top: 10px;
    background-color: var(--txt-color);
    padding: 10px;
    border-radius: 10px;

    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>h3{
            color: #fff;
        }

        &>p{
            color: #1876f2;
            cursor: pointer;
        }

        &:hover{
            color: #1876f2;
        }

    }

    &>div:last-child{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 10px;
        grid-row-gap: 15px;
        grid-column-gap: 10px;

        &>div{
            &>img{
                width: 105px;
                height: 120px;
                border-radius: 5px;
                object-fit: cover;
                cursor: pointer;
            }

            &>span{
                color: var(--font-color);
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
`