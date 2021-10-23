export default class Project {
    constructor() {
        this.Scenes = []
    }

    generate() {
        let lines = [];
        lines.push("from manim import *");
        lines.push("\n");

        let nScenes = this.Scenes.length

        for (let i = 0; i < nScenes; i++) {
            lines.push(this.Scenes[i].generate(`L${i}`))
        }
    }
}