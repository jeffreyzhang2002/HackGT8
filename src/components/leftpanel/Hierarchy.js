import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
`;

export default class Hierarchy extends React.Component{
    render(){
        return(
            <Container {...this.props}>
                {this.props.children}
            </Container>
        )
    }
}
