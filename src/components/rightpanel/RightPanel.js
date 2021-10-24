import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border-left: 4px solid #262629;
    overflow-y: auto;
    background-color: #222428;
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
