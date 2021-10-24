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

        super.generatePose().forEach(s => {lines.push(s)});
        super.generateFillStroke().forEach(s => {lines.push(s)});

        return lines;
    }
}

