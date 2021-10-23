import React from "react";
import Styled from "styled-components";


const Container = Styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    flex-direction: column;
`;

export default class MainPanel extends React.Component{
    render(){
        return(
            <Container {...this.props}>
                {this.props.children}
            </Container>
        )
    }
}
