import MComponent from "./MComponent";


export default class MCircle extends MComponent{
    constructor() {
        super();
        this.name = "Circle";
        this.template = {
            ...this.template,
            Radius: 0.1,
            Color: "#FFFFFF"
        }
    }

    preview(ctx) {
        var circle = new Path2D();
        circle.arc(this.template.Pose.X,this.template.Pose.Y,this.template.Radius, 0, 2 * Math.PI)
        ctx.strokeStyle = "#FF0000";
        ctx.stroke(circle)
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`radius=${this.template.Radius}`);
        if (this.template.Color.value !== "#FFFFFF") {
            params.push(`color="${this.template.Color}"`);
        }
        let allparams = "";
        for (let i = 0; i < params.length; i++) {
            allparams += params[i]
            allparams += ", "
        }
        allparams = allparams.slice(0, allparams.length - 2);
        lines.push(`${this.template.Name} = Circle(${allparams})`);

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
