import React from 'react';
import styled from 'styled-components';

function Feed({name, profile, post, desc}) {
  return (
    <>
      <Container>
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

            <POST>
              <img src={post} alt="" />
            </POST>

            <Details>
              <div>
                <img src="/images/love.png" alt="" />
                <img src="/images/lb.png" alt="" />
                Fahimun Islam Lamia and 3 more others
              </div>
              <div>
                3 Comments
              </div>
            </Details>

            <Action>
              <button>
                <img src="/images/lk.png" alt="" />
                <p>Like</p>
              </button>

              <button>
                <img src="/images/cmt.png" alt="" />
                <p>Comment</p>
              </button>

              <button>
                <img src="/images/shr.png" alt="" />
                <p>Share</p>
              </button>

            </Action>

          </Content>
      </Container>
    </>
  );
}

export default Feed;

const Container = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-left: 13px;
`

const Content = styled.div``

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &>div{
    display: inline-flex;
    &>img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }

    &>div{
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
    margin-left: 530px;
    transition: 0.4s;

    &:hover{
      background: #fff;
    }
  }
`

const Desc = styled.p`
  margin: 10px;

  &>a{
    color: #0a66c2;
  }
`

const POST = styled.div`
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
    color: #626262;
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
`

const Action = styled.div`
  border-top: 1px solid #0a66c2;
  display: flex;
  justify-content: space-around;
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
      &>img{
        width: 40px;
        margin-right: 15px;
      }

      &>p{
        font-size: 1rem;
      }

      &:hover{
        background-color: #e2e3e5;

      }
    }
`