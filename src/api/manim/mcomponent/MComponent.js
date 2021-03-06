
export default class MComponent {

    constructor() {
        this.render = true;
        this.name = "mobject";
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

    generatePose() {
        let list = []
        if ((this.template.Pose.X !== 0) || (this.template.Pose.Y !== 0)) {
            list.push(`${this.name}.move_to([${this.template.Pose.X}, ${this.template.Pose.Y}, 0])`);
        }
        if ((this.template.Pose.Rotation !== 0)) {
            list.push(`${this.name}.rotate(${this.template.Pose.Rotation})`);
        }

        return list;
    }



    generateFillStroke() {
        let lines = [];
        if ( (this.template.Fill.Enabled) && (this.template.Fill.Opacity > 0) ) {
            lines.push(`${this.name}.set_fill(color="${this.template.Fill.Color}", opacity=${this.template.Fill.Opacity})`);
        }

        if ( (this.template.Stroke.Enabled) && (this.template.Stroke.Width > 0) && (this.template.Stroke.Opacity > 0)) {
            lines.push(`${this.name}.set_stroke(color="${this.template.Stroke.Color}", width=${this.template.Stroke.Width}, opacity=${this.template.Stroke.Opacity})`);
        }

        return lines;
    }

    preview() {

    }

}
