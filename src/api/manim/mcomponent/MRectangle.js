import MComponent from "./MComponent";

export default class MRectangle extends MComponent {
    constructor() {
        super();
        this.name = "Rectangle"
        this.template = {
            ...this.template,
            Scale: {
                Height: 0,
                Width: 0,
            }
        }
    }

    preview(ctx) {
        ctx.strokeStyle = "#FF0000";
        console.log(this.template.Pose.X, this.template.Pose.Y,this.template.Scale.Height,this.template.Width);
        ctx.strokeRect(this.template.Pose.X, this.template.Pose.Y,this.template.Scale.Height,this.template.Scale.Width)
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`height=${this.template.Height}`);
        params.push(`width=${this.template.Width}`)
        if (this.template.Color.value !== "#FFFFFF") {
            params.push(`color="${this.template.Color}"`);
        }
        lines.push(`${this.template.Name} = Rectangle(${params.join(", ")})`);

        super.generatePose().forEach(s => {lines.push(s)});
        super.generateFillStroke().forEach(s => {lines.push(s)});

        return lines;
    }
}
