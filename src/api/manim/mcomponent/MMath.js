import MComponent from "./MComponent";

export default class MMath extends MComponent{
    constructor() {
        super();
        this.name = "LaTex";
        this.template = {
            ...this.template,
            TexString: "",
            FontSize: 11
        }
    }
}
