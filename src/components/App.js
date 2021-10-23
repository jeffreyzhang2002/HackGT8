import React from "react";
import Styled from "styled-components";

import LeftPanel from "./leftpanel/LeftPanel";
import RightPanel from "./rightpanel/RightPanel";
import MainPanel from "./mainpanel/MainPanel";
import Hierarchy from "./leftpanel/Hierarchy";
import Components from "./leftpanel/Components";
import Preview from "./mainpanel/Preview";
import Timeline from "./mainpanel/Timeline";
import UserInput from "./rightpanel/UserInput";

import MobjectList from "../MobjectList";


const Container = Styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
`;

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.updateMobjectList = this.appendMobjectList.bind(this);
        this.updateSelectedMobject = this.changeSelectedMobject.bind(this);
        this.updateMobjectProperties = this.updateLabels.bind(this);

        this.state = {
            mobjects: {},
            selectedmobjectindex: undefined,
        };
    }

    appendMobjectList(name, template){
        let index = Object.keys(this.state.mobjects).length;
        this.state.mobjects[index] = template;
        this.setState({
            mobjects: {
                ...this.state.mobjects,
            },
            selectedmobjectindex: index,
        }, console.log("Appended " + template + " to mobject list"));
        this.updateCanvas();
    }

    changeSelectedMobject(selection){
        this.setState({
            mobjects: {
                ...this.state.mobjects,
            },
            selectedmobjectindex: selection,
        }, console.log(this.state.mobjects[selection]));
    }

    updateLabels(selectionIndex, key, value) {

        if(typeof(value) == "object") {
            this.state.mobjects[selectionIndex].template[key][value['k']] = value['v'];
        } else{
            this.state.mobjects[selectionIndex].template[key] = value;
        }
        this.updateCanvas();
    }

    updateCanvas() {
        let canvas = document.getElementById('graphics');
        if (canvas && canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log(this.state.mobjects)
            Object.keys(this.state.mobjects).forEach((key, value) => {
                if(this.state.mobjects[key].preview != undefined)
                    this.state.mobjects[key].preview(ctx);
            })
        }
    }

    render()
    {
        return(
            <Container>
                <LeftPanel style={{width:"20vw"}}>

                    <Hierarchy style={{backgroundColor: "#39383d"}}
                               mobjects={this.state.mobjects}
                               callBack={this.updateSelectedMobject}/>

                    <Components style={{backgroundColor: "#616065"}}
                                components={MobjectList}
                                callBack={this.updateMobjectList}/>
                </LeftPanel>
                <MainPanel style={{width:"60vw"}}>

                    <Preview style={{backgroundColor: "black"}}
                             mobjects={this.state.mobjects}
                    />

                    <Timeline style={{backgroundColor: "#616065"}}/>

                </MainPanel>
                <RightPanel style={{width:"20vw"}}>
                    <UserInput
                        selectedIndex = {this.state.selectedmobjectindex}
                        selectectedmobject={this.state.mobjects[this.state.selectedmobjectindex]}
                        callBack = {this.updateMobjectProperties}
                    />
                </RightPanel>
            </Container>
        );
    }
}



