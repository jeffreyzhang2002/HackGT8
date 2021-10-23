import MAnimation from "./MAnimation";

export default class MFade extends MAnimation {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Scale: 1,
            Shift: "None"
        }
    }
}