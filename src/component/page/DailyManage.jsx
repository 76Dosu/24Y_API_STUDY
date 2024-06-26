import React, { useState } from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";

//ui
import Title from "../ui/Title";
import GenImage from "../ui/GenImage";
import FunctionButtonUF from "../ui/FunctionButton/FunctionButtonUF";
import FunctionButtonF from "../ui/FunctionButton/FunctionButtonF";

//image

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    background-color:#f5f5f5;
`

const SubText = styled.p`
    font-size:28px;
    font-weight:400;
    color:#333;

    margin-top:16px;
    margin-bottom:80px;
`

const GenImageFrame = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    width:100%;
`

const FucntionButtonFrame = styled.div`
    display:flex;
    align-items:center;
    margin-top:80px;
`

function DailyManage(props) {

    const GPT_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const [imageUrl, setImageUrl] = useState('');

    const generateImage = async () => {
        try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
            prompt: "flying cat",
            n: 1,
            size: '1024x1024'
            })
        });

        const data = await response.json();
        setImageUrl(data.data[0].url);
        } catch (error) {
        console.error('Error generating image:', error);
        } finally {
        }
    };

    return (
        
        <Wrapper>
            <Title text="김희찬님의 일기를 바탕으로 생성된 이미지입니다."></Title>
            <SubText onClick={generateImage}>24.04.10</SubText>

            <GenImageFrame>
                <GenImage imgURL={imageUrl}></GenImage>
                <GenImage></GenImage>
                <GenImage></GenImage>
            </GenImageFrame>

            <FucntionButtonFrame>
                <FunctionButtonF navigateLink="" marginRight="40px" buttonName="돌아가기"></FunctionButtonF>
                <FunctionButtonUF buttonName="저장하기"></FunctionButtonUF>
            </FucntionButtonFrame>
        </Wrapper>
        
    )   

}

export default DailyManage;