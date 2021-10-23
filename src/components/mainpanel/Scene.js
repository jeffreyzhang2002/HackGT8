import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    background-color: gray;
    overflow-x: auto;
    background-color: pink;
`;

const AnimationBlock = Styled.div`
    width: 300px;
    height: 100%
    background-color: red;
    border: 2px solid blue;
`;

export default class Scene extends React.Component{
    render(){

        let animations = [];

        for(let i = 0; i < 10; i++)
        {
            animations.push(
                <AnimationBlock>
                    {i}
                </AnimationBlock>
            )
        }

        return(
            <Container {...this.props}>
                {animations}
            </Container>
        )
    }
}
