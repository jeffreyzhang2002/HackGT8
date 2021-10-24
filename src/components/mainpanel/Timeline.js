import React from "react";
import Styled from "styled-components";

import Scene from "./Scene";

const Container = Styled.div`
    width: 100%;
    height: 20%;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
`;

const Title = Styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
`


export default class Timeline extends React.Component{
    render(){

        return(
            <Container {...this.props}>
                <Title> Timeline </Title>
                <Scene animations = {this.props.animations} />
            </Container>
        )
    }
}
