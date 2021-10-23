import MComponent from "./MComponent";

export default class MRectangle extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Scale: {
                Height: 0,
                Width: 0,
            }
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`height=${this.template.Height}`);
        params.push(`width=${this.template.Width}`)
        if (this.template.Color.value !== "#FFFFFF") {
            params.push(`color="${this.template.Color}"`);
        }
        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name} = Rectangle(${allparams})`);

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
