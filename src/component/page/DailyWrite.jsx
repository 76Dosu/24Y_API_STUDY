import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

//ui
import Header from "../ui/Header";
import WriteButtonUF from "../ui/WriteButton/WriteButtonUF";
import InputTextArea from "../ui/InputTextArea";

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;
    background-color:#f5f5f5;
`

const TitleFrame = styled.div`
    width:100%;
    display:flex;
    align-items:center;

    margin-top:120px;
`

const Title = styled.p`
    font-size:48px;
    font-weight:600;
    color:#333;
`

const SubTitle = styled.p`
    font-size:24px;
    font-weight:400;
    color:#333;
    margin-left:16px;
`
const DivideLine = styled.hr`
    height:1px;
    border:1px solid var(--main-textColor);
    margin:12px 0px 0px 0px;
`

const WriteFrame = styled.div`
    display:flex;
    flex-direction: column;
`

const InputFrame = styled.div`
    display:flex;
    align-items:center;

    margin-top:36px;
`

const InputTitle = styled.p`
    font-size:24px;
    font-weight:bold;
    color:#333;

    width:12%;
`

const WriteButtonFrame = styled.div`
    display:flex;
    width:fit-content;

    margin-top:40px;
    margin-left:auto;
`

function DailyWrite(props) {

    // GPT 연동
    axios
        .post(
            "https://api.openai.com/v1/chat/completions",
            {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "안녕 AI" }],
            },
            {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            }
        )
        .then((response) => {
            console.log(response.data);
            console.log(response.data.choices[0].message.content);
        })
        .catch((error) => {
            console.error(error);
        });

    // 사용자 입력 받아오기
    const [prompt, setPrompt] = useState("");
    
    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleClick = (e) => {
        const createKeyword = `${prompt}에 대한 내용의 일기를 대표할 만한 키워드 5개를 도출해줘`
    }

    // const navigate = useNavigate();
    

    return (
        
        <Wrapper>
            <Header></Header>

            <TitleFrame>
                <Title>일기 작성</Title>
                <SubTitle>오늘의 하루를 기록해보세요</SubTitle>
            </TitleFrame>

            <DivideLine />

            <WriteFrame>
                <InputFrame>
                    <InputTitle>제목</InputTitle>
                    <InputTextArea onChange={handleChange} value={prompt}></InputTextArea>
                </InputFrame>

                <InputFrame>
                    <InputTitle>내용</InputTitle>
                    <InputTextArea></InputTextArea>
                </InputFrame>
            </WriteFrame>
            
            <WriteButtonFrame onClick={handleClick}>
                <WriteButtonUF buttonName="작성하기"></WriteButtonUF>
            </WriteButtonFrame>
            
        </Wrapper>
        
    )   

}

export default DailyWrite;  