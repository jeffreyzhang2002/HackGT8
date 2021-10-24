import MComponent from "./MComponent";

export default class MLine extends MComponent {
    constructor() {
        super();

        this.name = "Line";
        this.template = {
            Start: {
                X: -1,
                Y: 0,
            },
            End: {
                X: 1,
                Y: 0,
            },
            Stroke: {
                Enabled: false,
                Width: 0,
                Opacity: 0,
                Color: "#FFFFFF",
            }
        }
    }

    preview(ctx) {
        ctx.strokeStyle = "#FF0000";
        ctx.beginPath();
        ctx.moveTo(this.template.Start.X, this.template.Start.Y)
        ctx.lineTo(this.template.End.X, this.template.End.Y)
        ctx.stroke();
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`start=[${this.template.Start.X1},${this.template.Start.Y1},0]`);
        params.push(`start=[${this.template.End.X2},${this.template.End.Y2},0]`);
        lines.push(`${this.template.Name} = Line(${params.join(", ")})`);

        if ( (this.template.Stroke.Enabled) && (this.template.Stroke.Width > 0) && (this.template.Stroke.Opacity > 0)) {
            lines.push(`${this.template.Name}.set_stroke(color="${this.template.Stroke.Color}", width=${this.template.Stroke.Width}, opacity=${this.template.Stroke.Opacity})`);
        }

        return lines;
    }
}
