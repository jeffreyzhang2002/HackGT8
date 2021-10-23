import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 70%;  
    display: flex;
`;

export default class Preview extends React.Component{

    componentDidMount() {
        let canvas = document.getElementById('graphics');
        canvas.style.width ='100%';
        canvas.style.height='100%';
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.strokeRect(0, 0, 500, 500);
        }
    }

    render(){
        return(
            <Container {...this.props}>
                <canvas id="graphics" width="500px" height="500px">

                </canvas>
            </Container>
        )
    }
}
