import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    flex-direction: column;
`;

const Items = Styled.div`
    margin: 1em;
    width: 80%;
    height: 100%
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
`

const Detail = Styled.details`
    margin-top: 1em;
`;

const Summary = Styled.summary`
    font-size: 1.5em;
    
     &:hover{
        background-color: orange;
    }
`;

const Label = Styled.p`
    margin: 0;
    margin-left: 1.5em;
    padding: 0;
    
    &:hover{
        background-color: orange;
    }
`;

const Title = Styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
`

export default class Components extends React.Component {
    render() {

        this.children = [];

        Object.entries(this.props.components).forEach(([key, value]) => {
            this.lables = [];
            Object.entries(value).forEach(([key,value])=> {
                this.lables.push(<Label> {key} </Label>)
            })

            this.children.push(
              <Detail>
                  <Summary> {key} </Summary>
                  {this.lables}
              </Detail>
          )
        }
        );

        return (
            <Container {...this.props}>
                <Title> Components </Title>
                <Items>
                    {this.children}
                </Items>
            </Container>
        )
    }
}
