import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 4px solid blue;
`;

export default class LeftPanel extends React.Component{
    render(){
        return(
            <Container {...this.props}>
                {this.props.children}
            </Container>
        )
    }
}
