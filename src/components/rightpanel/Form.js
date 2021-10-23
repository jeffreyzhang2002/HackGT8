import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: yellow;
`;

export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value : props.value}
        console.log(this.state);

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
