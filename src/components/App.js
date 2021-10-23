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

        this.bindedUpdateObject = this.updateObjects.bind(this);
        this.bindedUpdateSelection = this.updateSelection.bind(this);

        this.state = {
            Objects: {},
            Selection: {}
        }
        ;

    }

    updateObjects(name, template){

        console.log("Updated Object to " + name + " " + template);

        let c = Object.keys(this.state.Objects).length;
        this.state.Objects[c] = {name: name, template: template};
        this.setState({
            Objects: {
                ...this.state.Objects,
            },
            Selection: c,
        });


    }

    updateSelection(selection){

        console.log("Updated selection to " + selection);

        this.setState({
            Objects: {
                ...this.state.Objects,
            },
            Selection: selection,
        });
    }



    render()
    {
        return(
            <Container>
                <LeftPanel style={{width:"20vw", backgroundColor:"red"}}>
                    <Hierarchy style={{backgroundColor: "gray"}} values = {this.state.Objects} callBack={this.bindedUpdateSelection}/>
                    <Components style={{backgroundColor: "yellow"}} components={ManimObjects} callBack={this.bindedUpdateObject}/>
                </LeftPanel>
                <MainPanel style={{width:"60vw", backgroundColor:"green"}}>
                    <Preview style={{backgroundColor: "white"}}/>
                    <Timeline style={{backgroundColor: "red"}}/>
                </MainPanel>
                <RightPanel style={{width:"20vw", backgroundColor:"orange"}} components = {this.state}>

                </RightPanel>
            </Container>
        );
    }
}

