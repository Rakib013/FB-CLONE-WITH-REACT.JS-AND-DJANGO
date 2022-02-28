import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {axiosInstance} from '../api/axios';
import { useGlobalState } from '../state/provider';

function Feed({name, profle, post, desc, dark, id, owner, react, reacted, objct}) {
  const [isView, setIsView] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [hide, setHide] = useState(false);
  const [{profile}, dispatch] = useGlobalState();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axiosInstance.get(`/post/comment/${id}/`);
      setComments(res.data);
    }
    fetchComments();

    objct?.map(data => {
      if(data?.id == profile?.id) {
        setIsLiked(true);
      }
    })
  }, [id, objct, profile]);


  const PostComment = async () => {
    await axiosInstance.post(`/post/comment/`, {
      user: profile.id,
      post: id,
      comment: comment
    }).then( async res => {
      setIsView(true);
      await axiosInstance.get(`/post/comment/${id}/`).then(out => {
        setComments(out.data);
      })
      document.querySelector("#comment-inp").value = "";
    })
  }

  const LikePost = async () => {
    await axiosInstance.post(`post/like/${id}/`).then(async res => {
      await axiosInstance.get('/posts').then(res => {
        dispatch({
          type: 'POSTS',
          posts: res.data.All,
        })
      })
      setIsLiked(!isLiked);
    })
  }

  return (
    <>
      <Container hide={hide} dark={dark}>
          <Content>
            <Profile>
              <div>
                <Link to={`/friends/profile/${owner}`}>
                  <img src={profle} alt="" />
                </Link>
                <div>
                  <Link to={`/friends/profile/${owner}`}>
                    <h5>{name}</h5>
                  </Link>
                  <div>
                    <h6>2h . </h6>
                    <img src="/images/lact.png" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <img onClick={e => setIsDelete(!isDelete)} src="/images/thd.png" alt="" />
                {
                  isDelete && (
                    <div onClick={e => setIsDelete(!isDelete)}>
                      <span>
                        <img src="/images/x.png" alt="" />
                      </span>
                        {
                          owner == profile.id ? (
                            <>
                              <span>
                                <img src="/images/delete.png" alt="" /> Delete
                              </span>
                              <span>
                                <img src="/images/edit.png" alt="" /> Edit
                              </span>
                            </>
                          ) : (
                            <>
                              <span>
                                <img onClick={e=> setHide(true)} src="/images/delete.png" alt="" /> Hide
                              </span>
                              <span>
                                <img src="/images/edit.png" alt="" /> Report
                              </span>
                            </>
                          )
                        }
                    </div>
                  )
                }
              </div>
            </Profile>

            <Desc>
              {desc}
              <a href="#github"> #Rakib013</a> <a href="#github">#Github</a>
            </Desc>

            <Link to="/photo/view">
              <POST>
                {
                  post && (
                    <img src={post} alt="" />
                  )
                }
              </POST>
            </Link>

            <Details>
              <div>
                {reacted && (
                  <>
                    <img src="/images/love.png" alt="" />
                    <img src="/images/lb.png" alt="" />
                    {reacted.first_name + " " + reacted.last_name}
                  </>
                )} {react>1 ? "and " + (react-1) + " others" : ""}
              </div>
              <div onClick={e => setIsView(!isView)}>
                {comments.length} Comments
              </div>
            </Details>

            <Action>
              <button onClick={LikePost}>
                {
                  isLiked ? (
                    <>
                      <img src="/images/love.png" alt="" />
                      <p style={{color: "red"}}>Liked</p>
                    </>
                  ) : (
                    <>
                      <img src="/images/like-blue.png" alt="" />
                      <p>Like</p>
                    </>
                  )
                }
              </button>

              <button onClick={e => setIsView(!isView)}>
                <img src="/images/comments.png" alt="" />
                <p>Comment</p>
              </button>

              <button>
                <img src="/images/share.png" alt="" />
                <p>Share</p>
              </button>

            </Action>

            {!isView && (
              <View onClick={e => setIsView(!isView)}>
                View Comments
              </View>
            )}

            {isView && (
              <Comments>

                {
                  comments.map(comment => (
                    <Comment key={comment?.id}>
                      <img src={`http://127.0.0.1:8000${comment.profile.profile}`} alt="" />
                      <div>
                        <h5>{comment.profile.username}</h5>
                        <h6>{comment.comment}</h6>
                      </div>
                    </Comment>
                  ))
                }

              </Comments>
            )}

            <Input>
              <img src="/images/profile.jpg" alt="" />
              <div>
                <input onChange={e => setComment(e.target.value)} id="comment-inp" type="text" placeholder='Write your comment here' />
                <button onClick={PostComment}><img src="/images/send.png" alt="" /></button>
                <img src="/images/icit.png" alt="" />
                <img src="/images/gf.png" alt="" />
                <img src="/images/cam.png" alt="" />
              </div>
            </Input>

          </Content>
      </Container>
    </>
  );
}

export default Feed;

const Container = styled.div`
  display: ${props => props.hide ? "none" : "bolck"};
  margin-top: 20px;
  background-color: ${props => props.dark ? 'var(--txt-color)' : 'var(--bg-color)'};
  padding: 10px;
  border-radius: 10px;
  margin-left: 13px;
`

const Content = styled.div``

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-color);
  &>div{
    display: inline-flex;
    &>a{
      &>img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 20px;
        cursor: pointer;
      }
    }

    &>div{
      &>a{
        color: #fff;
        &>h5{
          cursor: pointer;
          transition: 0.3s;

          &:hover{
            color: #1876f2;
          }
        }
      }
      &>div{
        display: flex;
        align-items: center;
        &>img{
          margin-left: 5px;
          width: 20px;
        }
      }
    }
  }

  &>div:last-child{

    &>img{
      padding: 5px 5px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-left: auto;
      transition: 0.4s;
      background: #6d6e6e;
      position: relative;
      &:hover{
        background: #fff;
      }
    }

    &>div{
      background-color: var(--txt-color);
      position: absolute;
      width: 180px;
      right: 300px;
      padding: 10px;
      border-radius: 10px;
      transition: 0.4s;
      
      &>span{
        cursor: pointer;
        display: flex;
        align-items: center;
        color: crimson;
        margin-bottom: 20px;
        &>img{
          margin-right: 10px;
          width: 20px;
        }
      }

      &>span:last-child{
        margin-bottom: 10px;
        color: green;
      }

      &>span:first-child{
        margin-left: 90px;
        margin-bottom: 10px;
      }
    }
  }
`

const Desc = styled.p`
  margin: 10px;
  color: var(--font-color);

  &>a{
    color: #0a66c2;
  }
`

const POST = styled.div`
  cursor: pointer;
  &>img{
    width: 100%;
    max-height: 600px;
    object-fit: contain;
    border-radius: 10px;
  }
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 13px;

  &>div{
    color: var(--font-color);
    display: flex;
    align-items: center;
    &>img:first-child{
      width: 30px;
      position: relative;
    }

    &>img:last-child{
      width: 30px;
      position: absolute;
      margin-left: -10px;
    }
  }

  &>div:last-child{
    cursor: pointer;
    &:hover{
      color: #0a66c2;
    }
  }
`

const Action = styled.div`
  border-top: 1px solid #0a66c2;
  border-bottom: 1px solid #0a66c2;
  margin-bottom: 5px;
  display: flex;
  padding: 5px;
  justify-content: space-around;
  color: var(--font-color);
    &>button{
      margin-top: 5px;
      padding: 5px;
      border: none;
      display: flex;
      align-items: center;
      border-radius: 10px;
      cursor: pointer;
      background-color: transparent;
      width: 150px;
      transition: 0.4s;
      color: var(--font-color);
      &>img{
        width: 20px;
        margin-right: 15px;
      }
      
      &>p{
        font-size: 1rem;
      }

      &:hover{
        background-color: var(--txt-color);
      }
    }
`

const Input = styled.div`
  margin-top: 2px;
  padding: 13px;
  display: flex;
  align-items: center;

  &>img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
  }

  &>div{
    display: flex;
    padding: 3px 10px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 20px;
    display: flex;
    align-items: center;
    
    &>input{
      width: 100%;
      height: 25px;
      border-radius: 20px;
      outline: none;
      border: none;
      padding-left: 5px;
      background-color: transparent;
      color: var(--font-color);
    }

    &>img{
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-right: 12px;
      background-color: #fff;
      border-radius: 50%;
      border: 2px solid #0a66c2;
    }

    &>img:last-child{
      margin-right: 0px;
    }

    &>button{
      background-color: transparent;
      color: white;
      border: none;
      margin-right: 10px;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;

      &>img{
        width: 15px;
        height: 15px;
      }
    }
    
  }
`

const View = styled.div`
  margin-left: 13px;
  color: #626262;
  cursor: pointer;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  transition: 0.4s;
  
  &:hover{
    color: #0a66c2;
  }
`

const Comments = styled.div`
  margin-left: 13px;
  max-height: 300px;
  overflow-y: scroll;
`

const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
  &>img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  &>div{
    background-color: #111111;
    max-width: 60%;
    padding: 10px;
    border-radius: 20px;
    &>h5{
      color: #0a66c2;
    }
    &>h6{
      color: #cccaca;
    }
  }
`