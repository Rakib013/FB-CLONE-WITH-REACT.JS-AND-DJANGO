import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useGlobalState} from '../state/provider';

function LeftSideBar() {
    const [{profile}] = useGlobalState();
    return (
    <Left>
            <Link to={`/friends/profile/${profile?.id}`}>
                <User>
                    <img src={`http://127.0.0.1:8000${profile.profile}`} alt="" />
                        <span>{profile?.first_name + " " + profile?.last_name} </span>
                </User>
            </Link>
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
  );
}

export default LeftSideBar;

const Left = styled.div`
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
        color: var(--font-color);
        width: 90%;
        &>img{
            width: 25px;
            margin-right: 15px;
        }
        
        &:hover{
            background-color: var(--bg-color);
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
    color: var(--font-color);
    &>img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }
    
    &:hover{
        background-color: var(--bg-color);
        border-radius: 20px;
    }

    &>a{
        text-decoration: none;
        color: white;
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
            background-color: var(--bg-color);
            border-radius: 30px;
        }
    }
`