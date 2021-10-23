import MComponent from "./MComponent";

export default class MRectangle extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Scale: {
                Height: 0,
                Width: 0,
            }
        }
    }
}
