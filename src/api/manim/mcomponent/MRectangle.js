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
}
