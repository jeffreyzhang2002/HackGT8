import MComponent from "./MComponent";

export default class MText extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Text: undefined,
            FontSize: undefined
        }
    }
}