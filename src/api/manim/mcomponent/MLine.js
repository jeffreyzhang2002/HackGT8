import MComponent from "./MComponent";

export default class MLine extends MComponent {
    constructor() {
        super();
        this.template = {
            Start: {
                X1: undefined,
                Y1: undefined,
            },
            End: {
                X2: undefined,
                Y2: undefined,
            },
            Stroke: {
                Enabled: false,
                Width: undefined,
                Opacity: undefined,
                Color: undefined,
            }
        }
    }
}