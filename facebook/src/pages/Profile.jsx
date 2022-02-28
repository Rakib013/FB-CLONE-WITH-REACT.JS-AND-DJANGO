import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import Feed from '../components/Feed';
import {useGlobalState} from '../state/provider';
import { axiosInstance } from '../api/axios';
import { useParams } from 'react-router-dom';


function Profile({friends, requests, pid }) {
    const [profile, setProfile] = useState([]);
    const [posts, setPosts] = useState([]);
    const [shareFile, setShareFile] = useState("");
    const [cover, setCover] = useState("");
    const [isRequested, setIsRequested] = useState(false);
    const [isFriend, setIsFriend] = useState(false);
    const [unFriend, setUnFriend] = useState(false);

    const [update, setUpdate] = useState(false);
    
    const {id} = useParams();
    let user = pid == id ? true : false;

    useEffect(() => {
        const fetchProfile = (async () => {
            const res = await axiosInstance.get(`particular/profile/${id}/`);
            setProfile(res.data);
        })
        fetchProfile();

        const fetchPosts = (async () => {
            const res = await axiosInstance.get(`particularuser/posts/${id}/`);
            setPosts(res.data);
        })
        fetchPosts();

        friends?.map(friend => {
            if(friend == id){
                setIsFriend(true);
            }
        })

        requests?.map(request => {
            if(request == id){
                setIsRequested(true);
            }
        })

    }, [id, friends, requests]);

    const handleChange = (e) => {
        const image = e.target.files[0]
    
        if(image === '' || image === undefined){
            alert(`Not an image, the file is a ${typeof{ image }}`);
            return;
        }
        setShareFile(image)
    }

    const handleCoverChange = (e) => {
        const image = e.target.files[0]
    
        if(image === '' || image === undefined){
            alert(`Not an image, the file is a ${typeof{ image }}`);
            return;
        }
        setCover(image);
    }

    const updateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if(shareFile){
            formData.append('profile', shareFile, shareFile.name);
        }
        if(cover){
            formData.append('coverPic', cover, cover.name);
        }
        await axiosInstance.post(`profile/`, formData).then((res) => {
            console.log(res.data);
            window.location.reload();
        })
    }

    // Friend Request Sent, Delete Request
    const sent = async (e) => {
        e.preventDefault();
        await axiosInstance.post(`friend/request/${id}/`).then((res) => {
            console.log(res.data);
            window.location.reload();
        })
    }

    const cancle = async (e) => {
        e.preventDefault();
        await axiosInstance.delete(`friend/request/${id}/`).then((res) => {
            console.log(res.data);
            window.location.reload();
        })
    }

  return (
    <>
        <Container>
            <Cover src={`http://127.0.0.1:8000${profile?.coverPic}`} />
            <User>
                <img src={`http://127.0.0.1:8000${profile?.profile}`} alt="" />
                <span></span>
            </User>

            <Details>
                <div>
                    <h1>{profile?.first_name + " " + profile?.last_name}</h1>
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
                            <button onClick={e => setUpdate(!update)}><img src="/images/edit.gif" alt="" /> Edit Profile</button>
                        </div>
                    ) : (
                        <div>
                        {
                            isFriend ? (
                                <>
                                    <button onClick={e=> setUnFriend(!unFriend)} style={{position: "relative"}}><img src="/images/comments.png" alt="" /> Friends</button>
                                    {
                                        unFriend && (
                                            <Unfriend>
                                                <img src="/images/unfriend.png" alt="" />
                                                <button onClick={async e=>{
                                                    await axiosInstance.delete(`friend/accept/${id}/`);
                                                    window.location.reload();
                                                }}>Unfriend</button>
                                            </Unfriend>
                                        )
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        isRequested ? (
                                            <button onClick={cancle}><img src="/images/shr.png" alt="" />Cancle request</button>
                                            ) : (
                                            <button onClick={sent}><img src="/images/add-friends.png" alt="" />Add Friend</button>
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
                    {
                        user && (
                            <Post profiles={true} />
                        )
                    }
                    
                    {
                        posts?.map((post, index) => (
                            <Feed key={index} dark={true} id={post.id} name={post?.profile?.first_name + post?.profile?.last_name} react={post.react} reacted={post.reacted[0]} objct={post?.reacted} desc={post.title} profle={`http://127.0.0.1:8000${post?.profile?.profile}`} owner={post?.profile?.id} post={`http://127.0.0.1:8000${post.post}`} />
                        ))
                    }
                    
                </Right>
            </Content>
        </Bottom>
        
    {
        update && (
            <Wrapp>
                <Update>
                    <Head>
                        <h2>Edit Profile</h2>
                        <p onClick={e => setUpdate(!update)}>X</p>
                    </Head>

                    <Body>
                        <div>
                            <h3>Profile Pictue</h3>
                            <span onClick={e => document.getElementById("file").click()}>Edit</span>
                            <input onChange={handleChange} style={{display: "none"}} type="file" id="file" />
                        </div>
                        <div>
                            {
                                !shareFile ? (
                                    <img src={`http://127.0.0.1:8000${profile?.profile}`} alt="" />
                                ) : (
                                    <img src={URL.createObjectURL(shareFile)} alt="" />
                                )
                            }
                        </div>
                    </Body>

                    <Body2>
                        <div>
                            <h3>Cover Photo</h3>
                            <span onClick={e => document.getElementById("cover").click()}>Edit</span>
                            <input onChange={handleCoverChange} style={{display: "none"}} type="file" id="cover" />
                        </div>

                        <div>
                            {
                                !cover ? (
                                    <img src={`http://127.0.0.1:8000${profile?.coverPic}`} alt="" />
                                ) : (
                                    <img src={URL.createObjectURL(cover)} alt="" />
                                )
                            }
                        </div>

                    </Body2>

                    <Submit onClick={updateProfile}>
                        Update
                    </Submit>
                </Update>
            </Wrapp>
        )
    }

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
    height: 350px;
    object-fit: cover;
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

const Wrapp = styled.div`
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    z-index: 99999999;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
`


const Update = styled.div`
    background-color: #1f1e1e;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    width: 40%;
    height: 75%;
    border-radius: 10px;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px;
    border-bottom: 1px solid #696969;

    &>h2{
        font-size: 20px;
        font-weight: 300;
        margin-left: auto;
    }

    &>p{
        margin-left: auto;
        padding: 3px 10px;
        background-color: #666565;
        border-radius: 50%;
        cursor: pointer;
        font-weight: 300;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    &>div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;

        &>h3{
            color: white;
            font-weight: 300;
        }

        &>span{
            color: #0a66c2;
            font-size: 18px;
            cursor: pointer;
        }
    }

    &>div:last-child{
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 0;
        &>img{
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`

const Body2 = styled.div`
    padding: 10px;

    &>div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        &>h3{
            color: white;
            font-weight: 300;
        }
        &>span{
            color: #0a66c2;
            cursor: pointer;
            font-size: 18px;
        }
    }

    &>div:last-child{
        display: flex;
        justify-content: center;
        &>img{
            width: 80%;
            height: 200px;
            border-radius: 10px;
            object-fit: cover;
        }
    }
`

const Submit = styled.button`
    display: block;
    width: 80%;
    padding: 10px 0;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: white;
    background-color: #0a66c2;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
        background-color: #096dd1;
    }
`

const Unfriend = styled.div`
    position: absolute;
    margin-top: 40px;
    display: flex;
    background-color: #1c1e21;
    padding: 10px;
    border-radius: 5px;

    &>img{
        color: white;
        width: 30px;
    }

    &>button{
        margin-left: 5px;
        background-color: #31353b;
        border: none;
        padding: 3px 10px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
`
