import MComponent from "./MComponent";


export default class MCircle extends MComponent{
    constructor() {
        super();
        this.template = {
            ...this.template,
            Radius: 1
        }
    }
}