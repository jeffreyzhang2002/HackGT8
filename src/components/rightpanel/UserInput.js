import React from 'react';
import Styled from "styled-components";

import Form from "./Form";

const Container = Styled.div`
    width: 80%;
    height: 100%;  
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const Title = Styled.h1`
    margin: 0;
    padding-top: 1em;
    text-align: center;
`

const Subtitle = Styled.h1`
    margin: 0;
    padding-top: 0.5em;
    font-size: 1.5em;

`

const MultiBox = Styled.div`

`;


export default class UserInput extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let renderList = [];

        if(this.props.selectectedmobject) {
            renderList.push( <Title> {this.props.selectectedmobject.name} </Title>)
            let index = 0;

            Object.entries(this.props.selectectedmobject.template).forEach(
                ([key, value]) => {
                    if (typeof value != "object") {
                        renderList.push(
                            <Form
                                label = {key}
                                value = {value}
                                onKeyPress={(e) => {this.props.callBack(this.props.selectedIndex, key, e.target.value)}}
                            />
                        );
                    } else {
                        let internalRender = [];
                        Object.entries(value).forEach(([k, value]) => {
                            internalRender.push(
                                <Form
                                    label = {k}
                                    value = {value}
                                    onKeyPress={(e) => {this.props.callBack(this.props.selectedIndex, key, {k : k, v : e.target.value} )}}
                                />
                            );
                        });
                        renderList.push(
                            <MultiBox key = {index++}>
                                <Subtitle> {key + ":"} </Subtitle>
                                {internalRender}
                            </MultiBox>
                        );
                    }
                }
            );
        }

        return(
            <Container {...this.props}>
                {renderList}
            </Container>
        )
    }


}
