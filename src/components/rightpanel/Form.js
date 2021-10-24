import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5em;
    background-color: white;
    
    &:hover{
        
        background-color: orange;
    
    }
`;

export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value : props.value}
        this.update = this.updateValue.bind(this);
    }

    updateValue(e){
        this.setState({value: e.target.value});
    }


    render()
    {
        return(
            <Container {...this.props}>
                <label> {this.props.label} </label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.update}
                >
                </input>
            </Container>
        );
    }

}
