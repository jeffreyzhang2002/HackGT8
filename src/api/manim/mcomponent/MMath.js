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
            lines.push(super.generatePosition())
        }

        let fs = super.generateFillStroke();
        if (fs.length > 0) {
            lines.push();
        }

        return lines.join('\n');
    }
}

