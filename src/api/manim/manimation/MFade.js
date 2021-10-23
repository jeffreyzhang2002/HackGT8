import MAnimation from "./MAnimation";

export default class MFade extends MAnimation {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Scale: {Value: 1},
            Shift: {Value: "None"}
        }
    }
}
