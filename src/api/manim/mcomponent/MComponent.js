
export default class MComponent {

    constructor() {
        this.render = true;
        this.name = "Mobject";
        this.template = {

            Pose: {
                X: 0,
                Y: 0,
                Rotation: 0,
            },
            Fill: {
                Enabled: false,
                Opacity: 0,
                Color: "#FFFFFF",
            },
            Stroke: {
                Enabled: false,
                Width: 0,
                Opacity: 0,
                Color: "#FFFFFF",
            }
        }
    }

    generate() {
        console.log("nope, you didn't implement the fucking method");
        return ["nope, you didn't implement the fucking method"];
    }

    generatePosition() {
        return [`${this.template.Name}.move_to([${this.template.Pose.X}, ${this.template.Pose.Y}, 0])`];
    }



    generateFillStroke() {
        let lines = [];
        if ( (this.template.Fill.Enabled) && (this.template.Fill.Opacity > 0) ) {
            lines.push(`${this.template.Name}.set_fill(color="${this.template.Fill.Color}", opacity=${this.template.Fill.Opacity})`);
        }

        if ( (this.template.Stroke.Enabled) && (this.template.Stroke.Width > 0) && (this.template.Stroke.Opacity > 0)) {
            lines.push(`${this.template.Name}.set_stroke(color="${this.template.Stroke.Color}", width=${this.template.Stroke.Width}, opacity=${this.template.Stroke.Opacity})`);
        }

        return lines;
    }

    preview() {

    }

}
