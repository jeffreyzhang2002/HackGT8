import MComponent from "./MComponent";

export default class MPoint extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Radius: {value: 0.1},
            Color: {value: "#FFFFFF"}
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`point=[${this.template.Pose.X},${this.template.Pose.Y},0]`);
        params.push(`radius=${this.template.Radius.value}`);
        if (this.template.Color.value !== "#FFFFFF") {
            params.push(`color="${this.template.Color.value}"`);
        }
        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name.value} = Dot(${allparams})`);

        if ( (this.template.Fill.Enabled) && (this.template.Fill.Opacity > 0) ) {
            lines.push(`${this.template.Name.value}.set_fill(color="${this.template.Fill.Color}", opacity=${this.template.Fill.Opacity})`);
        }

        if ( (this.template.Stroke.Enabled) && (this.template.Stroke.Width > 0) && (this.template.Stroke.Opacity > 0)) {
            lines.push(`${this.template.Name.value}.set_stroke(color="${this.template.Stroke.Color}", width=${this.template.Stroke.Width}, opacity=${this.template.Stroke.Opacity})`);
        }
        let r = "";
        for (let i = 0; i < lines.length; i++) {
            r += lines[i];
            r += "\n";
        }
        return r;
    }
}
