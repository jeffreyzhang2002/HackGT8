import MComponent from "./MComponent";

export default class MMath extends MComponent{
    constructor() {
        super();
        this.name = "LaTex";
        this.template = {
            ...this.template,
            TexString: "",
            FontSize: 11
        }
    }

    generate() {
        let lines = [];
        lines.push(`${this.template.Name} = MathTex(tex_strings=${this.template.TexString})`);

        if ((this.template.Pose.X !== 0) || (this.template.Pose.Y !== 0)) {
            super.generatePosition().forEach(s => { lines.push(s) });
        }
        super.generateFillStroke().forEach(s => {lines.push(s)});

        return lines;
    }
}

