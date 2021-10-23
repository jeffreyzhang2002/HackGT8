import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;  
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-left: 4px solid #262629;
    overflow-y: auto;
    
`;

const Title = Styled.h1`
    margin: 0;
    padding-top: 1em;
    text-align: center;
`

const MultiBox = Styled.div`

`;

const SingleBox = Styled.form`

`;

export default class RightPanel extends React.Component{

    constructor(props) {
        super(props);

    }

    setValue(key, value)
    {

    }


    render(){



        this.entries = [];


        if(this.props.components.Objects[this.props.components.Selection])
        {


            console.log(this.props.components.Objects[this.props.components.Selection].template.template)
            this.entries.push( <Title> {this.props.components.Objects[this.props.components.Selection].name}</Title> )


            Object.entries(this.props.components.Objects[this.props.components.Selection].template.template).forEach(([key, value]) => {



                if(false)
                {
                    this.entries.push(
                        <SingleBox>
                            <label>{key}</label>
                            <input type="text" id="fname" name="fname" value={value}></input><br/>
                        </SingleBox>
                    )
                }
                else
                {
                    this.childrenentries = [];
                    Object.entries(value).forEach(([key, value]) => {
                        this.childrenentries.push(
                            <SingleBox>
                                <label>{key}</label>
                                <input type="text" id="fname" name="fname" value={value}></input><br/>
                            </SingleBox>
                        )
                    });

                    this.entries.push(
                        <MultiBox>
                            <h1> {key} </h1>
                            {this.childrenentries}
                        </MultiBox>
                    )
                }
            });
        }

        return(
            <Container {...this.props}>
                {this.entries}
                <br/>
                <br/>
                <br/>
            </Container>
        )
    }
}
