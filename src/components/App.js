import React from "react";
import Styled from "styled-components";
import LeftPanel from "./leftpanel/LeftPanel";
import RightPanel from "./rightpanel/RightPanel";
import MainPanel from "./mainpanel/MainPanel";
import Hierarchy from "./leftpanel/Hierarchy";
import Components from "./leftpanel/Components";
import Preview from "./mainpanel/Preview";
import Timeline from "./mainpanel/Timeline";

import ManimObjects from "../ManimObjects";


const Container = Styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
`;

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            values: {
                line: {},
                circle: {},
                line1: {},
                circle1: {},
                line2: {},
                circle2: {},
                line3: {},
                circle3: {},
                line4: {},
                circle4: {},
                line5: {},
                circle5: {},
            }
        };

    }
    render()
    {
        return(
            <Container>
                <LeftPanel style={{width:"20vw", backgroundColor:"red"}}>
                    <Hierarchy style={{backgroundColor: "gray"}} values = {this.state.values}/>
                    <Components style={{backgroundColor: "yellow"}} components={ManimObjects}/>
                </LeftPanel>
                <MainPanel style={{width:"60vw", backgroundColor:"green"}}>
                    <Preview style={{backgroundColor: "white"}}/>
                    <Timeline style={{backgroundColor: "red"}}/>
                </MainPanel>
                <RightPanel style={{width:"20vw", backgroundColor:"orange"}}>

                </RightPanel>
            </Container>
        );
    }
}

