import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 50%;  
    display: flex;
    flex-direction: column;
    color: #ffffff;
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
    color: #ffffff;
`;

const Summary = Styled.summary`
    font-size: 1.5em;
    color: #ffffff;
    
     &:hover{
        background-color: #000000;
    }
`;

const Label = Styled.p`
    margin: 0;
    margin-left: 1.5em;
    padding: 0;
    color: #ffffff;
    &:hover{
        background-color: #000000;
    }
`;

const Title = Styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
`

export default class Components extends React.Component {
    render() {
        let renderList = [];

        let groups = 0;
        Object.entries(this.props.components).forEach(
            ([key, value]) => {
                let labels = [];

                let items = 0;
                Object.entries(value).forEach(
                    ([key,value]) => {
                        labels.push(
                            <Label
                                key = {items++}
                                onClick={(e) => {this.props.callBack(key, new value())}}
                            >
                                {key}
                            </Label>)
                    })
                renderList.push(
                <Detail key = {groups++}>
                    <Summary> {key} </Summary>
                    {labels}
                </Detail>
          )
        }
        );

        return (
            <Container {...this.props}>
                <Title> Components </Title>
                <Items>
                    {renderList}
                </Items>
                <button onClick={() => {this.props.gen()}} >
                    Generate Manim
                </button>
            </Container>
        )
    }
}
