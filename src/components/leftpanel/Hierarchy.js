import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 4px solid #262629;
`;

const Label = Styled.div`
    margin: 0;
    padding: 0;
    font-size: 1.5em;
    
    &:hover{
        background-color: orange;
    }
`;

const Title = Styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
`

const Items = Styled.div`
    margin: 1em;
    width: 80%;
    height: 100%
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow-y: auto;
`

export default class Hierarchy extends React.Component{

    render() {
        let children = [];

        let index = 0;
        Object.entries(this.props.mobjects).forEach(
            ([key, value]) => {
                children.push(
                    <Label
                        key = {index++}
                        onClick={() => {this.props.callBack(key)}}>
                        {parseInt(key) + 1 + ": " + value.name}
                    </Label>
                );
            }
        );

        return(
            <Container {...this.props}>
                <Title> Manim Objects </Title>
                <Items>
                    {children}
                </Items>
            </Container>
        )
    }
}
