import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useGlobalState} from '../state/provider';


function RightSideBar() {
    const [{profile}] = useGlobalState();
  return (
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

                </div>
            </Title>

            <Onlines>
                {
                    profile?.friend?.map(friend => (
                        <Link to={`/friends/profile/${friend.id}`}>
                            <Online>
                                <div>
                                    <div></div>
                                    <img src={`http://127.0.0.1:8000${friend?.profile}`} alt="" />
                                </div>
                                <p>{friend?.first_name + " " + friend?.last_name}</p>
                            </Online>
                        </Link>
                    ))
                }
            </Onlines>
        </div>
    </Right>
  );
}

export default RightSideBar;

const Right = styled.div`
    background-color: var(--bg-color);
    border-radius: 10px;
    height: calc(100vh - 70px);
    overflow-y: scroll;
    position: sticky;
    top: 72px;
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
