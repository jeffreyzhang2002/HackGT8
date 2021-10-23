import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    box-sizing: border-box;
    border-left: 4px solid blue;
`;

export default class RightPanel extends React.Component{
    render(){
        return(
            <Container {...this.props}>
                {this.props.children}
            </Container>
        )
    }
}
