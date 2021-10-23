import MComponent from "./MComponent";

export default class MMath extends MComponent{
    constructor() {
        super();
        this.template = {
            ...this.template,
            TexString: "",
            FontSize: 11
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`tex_strings=${this.template.TexString}`);

        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name} = MathTex(${allparams})`);

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