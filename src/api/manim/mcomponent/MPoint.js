import MComponent from "./MComponent";

export default class MPoint extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Radius: 0.1,
            Color: "#FFFFFF"
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`point=[${this.template.Pose.X},${this.template.Pose.Y},0]`);
        params.push(`radius=${this.template.Radius}`);
        if (this.template.Color !== "#FFFFFF") {
            params.push(`color="${this.template.Color}"`);
        }
        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name} = Dot(${allparams})`);

        let fs = super.generateFillStroke();
        if (fs.length > 0) {
            lines.push();
        }

        return lines.join('\n');
    }
}
