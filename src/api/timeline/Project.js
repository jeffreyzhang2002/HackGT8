export default class Project {
    constructor() {
        this.Scenes = []
        this.MainScene = "Mainim"
    }

    generate() {
        let lines = [];
        lines.push("from manim import *");
        lines.push("\n");

        let nScenes = this.Scenes.length

        for (let i = 0; i < nScenes; i++) {
            lines.push(this.Scenes[i].generate(`L${i}`))
            lines.push('\n')
        }

        let what = [];
        for (let i = 0; i < nScenes; i++) {
            what.push(`L${i}`)
        }

        lines.push(`class ${this.MainScene}(${what.join(", ")}):`)
        lines.push("\tdef setup(self):")

        for (let i = 0; i < what.length; i++) {
            lines.push(`\t\t${what[i]}.setup(self)`)
        }

        lines.push("\tdef construct(self):")

        for (let i = 0; i < what.length; i++) {
            lines.push(`\t\t${what[i]}.construct(self)`)
        }

        lines.push("\n");

        return lines.join("\n")
    }
}