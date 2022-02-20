import React, { useState } from 'react';
import styled from 'styled-components';
import {axiosInstance} from '../api/axios';
import {useGlobalState} from '../state/provider';

function Post({profiles}) {
    const [{profile}] = useGlobalState();
    const [isPost, setIsPost] = useState(false);
    const [shareFile, setShareFile] = useState("");
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0]
    
        if(image === '' || image === undefined){
            alert(`Not an image, the file is a ${typeof{ image }}`);
            return;
        }
        setShareFile(image)
    }

    const PostSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('user', profile.id);
        formData.append('post', shareFile, shareFile.name);
        await axiosInstance.post(`posts/`, formData);
        window.location.reload();
    }
    
    return (
    <>
        <Container dark={profiles}>
            <Content>
                <div onClick={e => setIsPost(!isPost)}>
                    <img src={`http://127.0.0.1:8000${profile?.profile}`} alt="" />
                    <button>What's on your mind, Rakibul?</button>
                </div>
                <Last>
                    <Button onClick={e => setIsPost(!isPost)}>
                        <img src="/images/vd.gif" alt="" />
                        Live Video
                    </Button>

                    <Button onClick={e => setIsPost(!isPost)}>
                        <img src="/images/pt.png" alt="" />
                        Photos/Videos
                    </Button>

                    <Button onClick={e => setIsPost(!isPost)}>
                        <img src="/images/feel.png" alt="" />
                        Feeling/Activity
                    </Button>
                </Last>
            </Content>
            {
                isPost && (
                    <Upload>
                    <Box>
                        <Head>
                            <h3>Create Post</h3>
                            <span onClick={e => setIsPost(!isPost)}>X</span>
                        </Head>
                        <User>
                            <img src="/images/profile.jpg" alt="" />
                            <div>
                                <h4>Rakibul Islam</h4>
                                <div>
                                    <img src="/images/frds.png" alt="" />
                                    <span>Friends</span>
                                    <img src="/images/fbarrow.png" alt="" />
                                </div>
                            </div>
                        </User>

                        <Input>
                            <textarea type="text" onChange={ e => setTitle(e.target.value)} placeholder="What's on your mind, Rakibul?" />
                            <img src="/images/pemoji.png" alt="" />
                        </Input>

                        <PhotoInput>
                            {
                                !shareFile ? (
                                    <div onClick={e => document.getElementById("file").click()}>
                                        <input onChange={handleChange} id="file" type="file" />
                                        <img src="/images/addimg.png" alt="" />
                                        <h4>Add Photos/Videos</h4>
                                        <h6>or drag and drop</h6>
                                    </div>
                                ) : (
                                    <div onClick={e => document.getElementById("file").click()}>
                                        <input onChange={handleChange} id="file" type="file" />
                                        <img src={URL.createObjectURL(shareFile)} alt="" />
                                    </div>
                                )
                            }
                        </PhotoInput>

                        <Submit onClick={PostSubmit}>
                            Post
                        </Submit>

                    </Box>
                </Upload>
                )
            }
        </Container>
    </>
  );
}

export default Post;


const Container = styled.div`
    margin-left: 10px;
    background-color: ${props => props.dark ? 'var(--txt-color)' : 'var(--bg-color)'};
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
    padding: 3px;
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
        background-color: var(--txt-color);
    }
`

const Upload = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    background-color: #1b1b1b;
    width: 30%;
    height: 70%;
    border-radius: 10px;
    -webkit-box-shadow: -2px -1px 20px 5px #928f92; 
    box-shadow: -2px -1px 20px 5px #6b6a6b;
    `

const Head = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
    &>h3{
        color: #fff;
        margin-left: auto;
        margin-right: auto;
        font-weight: 400;
    }
    &>span{
        padding: 5px;
        color: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 50%;
        font-weight: bold;
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            background-color: #1876f2;
        }
    }
`

const User = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 10px;
    &>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }
    &>div{
        &>div{
            display: flex;
            align-items: center;
            background-color: gray;
            padding: 3px;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            justify-content: space-between;
            &>img{
                width: 20px;
            }
            &>span{
                font-size: 12px;
                color: black;
            }
        }
    }
`

const Input = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 0;
    &>textarea{
        width: 100%;
        height: 100px;
        background-color: transparent;
        outline: none;
        border: none;
        color: gray;
    }
    &>img{
        width: 25px;
        cursor: pointer;
    }
`

const PhotoInput = styled.div`
    margin: 0 30px;
    padding: 10px 0;
    border: 1px solid #353434;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &>div{
        background-color: #353434;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 200px;
        cursor: pointer;
        border-radius: 10px;
        transition: 0.3s;

        &>input{
            visibility: hidden;
        }

        &>img{
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
        }

        &>h4{
            color: white;
        }

        &:hover{
            border-radius: 5px;
            background-color: #414040;

        }
    }

    &>div:last-child{
        &>img:last-child{
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 7px;
            margin: 0;
        }

    }
`

const Submit = styled.button`
    margin: 20px;
    width: 90%;
    padding: 7px 0;
    border-radius: 7px;
    background-color: #1876f2;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: #458eee;
    }
`