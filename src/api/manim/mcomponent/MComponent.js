
export default class MComponent {

    constructor() {
        this.render = true;
        this.template = {
            Name: { value: "Component" },
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
        return "nope, you didn't implement the fucking method";
    }

}
