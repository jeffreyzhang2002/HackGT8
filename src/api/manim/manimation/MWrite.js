import MAnimation from "./MAnimation";

export default class MWrite extends MAnimation {
    constructor() {
        super();
        this.name = "write";
    }

    generate() {
        let com = (this.template.Type === "Out") ? "Unwrite" : "Write";
        return `${com}(${this.template.MainComponent})`;
    }
}
