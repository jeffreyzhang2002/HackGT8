import MComponent from "./MComponent";


export default class MCircle extends MComponent{
    constructor() {
        super();
        this.name = "circle";
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
        lines.push(`${this.name} = Circle(${params.join(", ")})`);

        super.generatePose().forEach(s => { lines.push(s) });
        super.generateFillStroke().forEach(s => { lines.push(s) });

        return lines;
    }
}
