import React from 'react';
import styled from 'styled-components';

function Story({image, status, info}) {
  return (
    <Container>
        <img src={image} alt="" />
        <Content>
            <img src={status} alt="" />
            <p>{info}</p>
        </Content>
    </Container>
  );
}

export default Story;


const Container = styled.div`
    height: 250px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &>img{
        border-radius: 10px;
        height: 250px;
        width: 120px;
        position: relative;
        object-fit: cover;
        transition: 0.4s;
    }

    &:hover{
        &>img{
            transform: scale(1.05);
        }
    }
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 18%;
    padding-top: 0%;
    padding-left: 0px;
    position: absolute;

    &>img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border: 3px solid #0a66c2;
        border-radius: 50%;
    }

    &>p{
        margin-top: 150px;
        padding: 0px 5px 3px 5px;
        border-radius: 4px;
        background-color: #0000007f;
        height: 20px;
        margin-left: 0px;
        color: #fff;
    }
`