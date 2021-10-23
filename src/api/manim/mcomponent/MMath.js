import MComponent from "./MComponent";

export default class MMath extends MComponent{
    constructor() {
        super();
        this.template = {
            ...this.template,
            TexString: undefined,
            FontSize: undefined
        }
    }
}