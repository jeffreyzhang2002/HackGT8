import MComponent from "./MComponent";


export default class MCircle extends MComponent{
    constructor() {
        super();
        this.name = "Circle";
        this.template = {
            ...this.template,
            Radius: undefined
        }
    }

    preview(ctx) {
        var circle = new Path2D();
        circle.arc(this.template.Pose.X, this.template.Pose.Y, this.template.Radius.value, 0, 2 * Math.PI)
        ctx.strokeStyle = "#FF0000";
        ctx.stroke(circle)
        ctx.strokeRect(0, 0, 20, 20);
        console.log("Ran!!!!!!")
    }
}
