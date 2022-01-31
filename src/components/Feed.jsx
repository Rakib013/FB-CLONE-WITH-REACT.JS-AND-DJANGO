import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Feed({name, profile, post, desc, dark}) {
  const [isView, setIsView] = useState(false);

  return (
    <>
      <Container dark={dark}>
          <Content>
            <Profile>
              <div>
                <img src={profile} alt="" />
                <div>
                  <h5>{name}</h5>
                  <div>
                    <h6>2h . </h6>
                    <img src="/images/lact.png" alt="" />
                  </div>
                </div>
              </div>
              <img src="/images/thd.png" alt="" />
            </Profile>

            <Desc>
              {desc}
              <a href="#github"> #Rakib013</a> <a href="#github">#Github</a>
            </Desc>

            <Link to="/photo/view">
              <POST>
                <img src={post} alt="" />
              </POST>
            </Link>

            <Details>
              <div>
                <img src="/images/love.png" alt="" />
                <img src="/images/lb.png" alt="" />
                Fahimun Islam Lamia and 3 more others
              </div>
              <div onClick={e => setIsView(!isView)}>
                3 Comments
              </div>
            </Details>

            <Action>
              <button>
                <img src="/images/lik.png" alt="" />
                <p>Like</p>
              </button>

              <button onClick={e => setIsView(!isView)}>
                <img src="/images/cmt.png" alt="" />
                <p>Comment</p>
              </button>

              <button>
                <img src="/images/shr.png" alt="" />
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
                <Comment>
                  <img src="/images/fahimun.jpeg" alt="" />
                  <div>
                    <h5>Fahimun Islam Lamia</h5>
                    <h6>Where are you man? You are looking gorgeous. We missed you so much come to the versity. If you wouldn't come right now we 
                      will direct come your home.
                    </h6>
                  </div>
                </Comment>

                <Comment>
                  <img src="/images/nushrat.jpeg" alt="" />
                  <div>
                    <h5>Nushrat Jahan</h5>
                    <h6>Where are you man? You are looking gorgeous. We missed you so much come to the versity. If you wouldn't come right now we 
                      will direct come your home.
                    </h6>
                  </div>
                </Comment>

                <Comment>
                  <img src="/images/profile.jpg" alt="" />
                  <div>
                    <h5>Rakibul Islam</h5>
                    <h6>Where are you man? You are looking gorgeous. We missed you so much come to the versity. If you wouldn't come right now we 
                      will direct come your home.
                    </h6>
                  </div>
                </Comment>

                <Comment>
                  <img src="/images/status-1.png" alt="" />
                  <div>
                    <h5>Fahimun Islam Lamia</h5>
                    <h6>Where are you man? You are looking gorgeous. We missed you so much come to the versity. If you wouldn't come right now we 
                      will direct come your home.
                    </h6>
                  </div>
                </Comment>
              </Comments>
            )}

            <Input>
              <img src="/images/profile.jpg" alt="" />
              <div>
                <input type="text" placeholder='Write your comment here' />
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
    &>img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
      cursor: pointer;
    }

    &>div{
      &>h5{
        cursor: pointer;
        transition: 0.3s;

        &:hover{
          color: #1876f2;
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

  &>img{
    padding: 5px 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-left: auto;
    transition: 0.4s;
    background: #6d6e6e;
    
    &:hover{
      background: #fff;
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
    height: 100%;
    object-fit: cover;
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
    background-color: #e5e8eb;
  }
`

const Comments = styled.div`
  margin-left: 13px;
  height: 300px;
  overflow-y: scroll;
`

const Comment = styled.div`
  display: flex;
  align-items: center;
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
    width: 60%;
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