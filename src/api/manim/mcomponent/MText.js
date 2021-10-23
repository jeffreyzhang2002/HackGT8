import MComponent from "./MComponent";

export default class MText extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Text: "Sample Text",
            FontSize: 11
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`tex_strings=${this.template.Text}`);
        params.push(`font_size=${this.template.FontSize}`)

        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name} = Text(${allparams})`);

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