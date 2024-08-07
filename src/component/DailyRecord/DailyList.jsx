import React from "react";
import styled from "styled-components";

//ui
import DailyItems from '../DailyRecord/DailyItems.jsx'

//image

//styled
const Wrapper = styled.div`
    width:100%;
`

function DailyList(props) {

    const { posts } = props;

    return (
        
        <Wrapper>
            {posts.map(post => {

                return (
                    <DailyItems key={post.id} post={post}></DailyItems>
                );

            })}
        </Wrapper>
        
    )   

}

export default DailyList;