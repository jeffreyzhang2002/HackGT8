import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    background-color: #1e2024;
    overflow-x: auto;
`;

const AnimationBlock = Styled.div`
    width: 300px;
    height: 100%
    border: 2px solid black;
    
    &:hover{
        background-color: orange;
    }
`;

export default class Scene extends React.Component{
    render(){

        let animations = [];
        this.props.animations.forEach( (value) => {
            console.log(value);
            animations.push(
                <AnimationBlock>
                    {value.name}
                </AnimationBlock>)

        })



        return(
            <Container {...this.props}>
                {animations}
            </Container>
        )
    }
}
