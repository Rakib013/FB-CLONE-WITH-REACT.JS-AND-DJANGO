import React from 'react';
import styled from 'styled-components';

function Story({image, status, info, isFirst}) {
  return (
    <Container>
        <img src={status} alt="" />
        <Content>
            <div>
                <img isFirst={isFirst} src={image} alt="" />
                <p>{info}</p>
            </div>
        </Content>
    </Container>
  );
}

export default Story;


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 10px;
    height: 380px;
    width: 150px;

    &>img{
        position: absolute;
        border-radius: 10px;
        height: 250px;
        width: 130px;
        object-fit: cover;
    }
`


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &>div{
        &>img{
            width: 45px;
            height: 45px;
            object-fit: cover;
            left: -23px;
            top: -135px;
            margin-right: 20px;
            border: 3px solid #1876f2;
            border-radius: 50%;
            position: relative;
        }

        &>p{
            margin-top: 20px;
            position: relative;
            width: 100%;
            text-align: center;
            color: white;
        }
    }
`