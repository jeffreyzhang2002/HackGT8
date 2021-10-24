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
import Scene from "../api/timeline/Scene";

import MobjectList from "../MobjectList";
import MAnimation from "../api/manim/manimation/MAnimation";
import Project from "../api/timeline/Project";


const Container = Styled.div`
    width: 100vw;
    height: 100vh;  
    display: flex;
`;

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.project = new Project();
        this.scene = new Scene();
        this.project.Scenes.push(this.scene);

        this.updateMobjectList = this.appendMobjectList.bind(this);
        this.updateSelectedMobject = this.changeSelectedMobject.bind(this);
        this.updateMobjectProperties = this.updateLabels.bind(this);
        this.generator = this.generate.bind(this);

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

        if(template instanceof MAnimation)
        {
            this.scene.MA.push(template);
            console.log(this.scene.MA);
        }
        else
        {
            this.scene.MC.push(template);
            console.log(this.scene.MC);
        }

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

    generate() {
        console.log(this.project.generate());
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

                    <Hierarchy style={{backgroundColor: "#222428"}}
                               mobjects={this.state.mobjects}
                               callBack={this.updateSelectedMobject}/>

                    <Components style={{backgroundColor: "#222428"}}
                                components={MobjectList}
                                callBack={this.updateMobjectList}
                                gen={this.generator}
                    />
                </LeftPanel>
                <MainPanel style={{width:"60vw"}}>

                    <Preview style={{backgroundColor: "black"}}
                             mobjects={this.state.mobjects}
                    />

                    <Timeline style={{backgroundColor: "#282a2f"}} animations = {this.scene.MA}/>

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



