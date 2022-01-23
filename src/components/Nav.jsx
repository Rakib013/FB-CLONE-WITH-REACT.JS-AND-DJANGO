import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
      <>
        <Container>
            <Left>
                <Logo src="/images/fb.png" alt="" />
                <SearchBox>
                    <img src="/images/search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </SearchBox>
            </Left>
            <Center>
                <div>
                    <Icon src="/images/home.svg" alt="" />
                </div>

                <div>
                    <Icon src="/images/frd.svg" alt="" />
                </div>

                <div>
                    <Icon src="/images/vd.svg" alt="" />
                </div>
            </Center>
            <Right>
                <User>
                    <img src="/images/profile.jpg" alt="" />
                    <span>Rakibul</span>
                </User>

                <Dropdown drop={false}>
                    <img src="/images/notification.png" alt="" />
                </Dropdown>

                <Dropdown drop={true}>
                    <img src="/images/fbarrow.png" alt="" />
                </Dropdown>
            </Right>
        </Container>
      </>
  );
}

export default Nav;


const Container = styled.div`
    background: #1876f2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
`

const Left = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    cursor: pointer;   
    width: 50px;
    margin-right: 15px;
`

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background: #efefef;
    width: 250px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    &>img{
        width: 18px;
    }

    &>input{
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        padding: 13px;
    }
`

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>div{
        width: 50px;
        margin-right: 80px;
        height: 50px;
        display: flex;
        justify-content: center;
        background-color: #f0eaea;
        border-radius: 50%;
        cursor: pointer;
    }
`

const Icon = styled.img`
    width: 40px;
`

const Right = styled.div`
    display: flex;
`

const User = styled.div`
    display: flex;
    align-items: center;
    color: white;
    background-color: #30505f;
    padding: 3px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    &>img{
        margin-right: 5px;
        width: 40px;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
    }

    &:hover{
        background-color: #6d8a8a;
    }
`

const Dropdown = styled.div`
  margin-left: 15px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.drop ? '#f8f0f0' : '#3d3737'};
  cursor: pointer;
  transition: 0.4s;

  &>img{
    width: ${props => props.drop ? '15px' : '30px'};
    height: ${props => props.drop ? '15px' : '30px'};
  }

  &:hover{
    background-color: ${props => props.drop ? '#b3aeae' : '#131111'};
  }
`