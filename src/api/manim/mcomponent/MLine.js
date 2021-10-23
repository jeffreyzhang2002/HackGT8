import MComponent from "./MComponent";

export default class MLine extends MComponent {
    constructor() {
        super();
        this.template = {
            Start: {
                X1: -1,
                Y1: 0,
            },
            End: {
                X2: 1,
                Y2: 0,
            },
            Stroke: {
                Enabled: false,
                Width: 0,
                Opacity: 0,
                Color: "#FFFFFF",
            }
        }
    }
}