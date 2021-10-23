import MComponent from "./MComponent";

export default class MPoint extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Radius: {value: undefined}
        }
    }
}
