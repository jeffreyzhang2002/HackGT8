import MAnimation from "./MAnimation";

export default class MWrite extends MAnimation {
    constructor() {
        super();
    }

    generate() {
        let com = (this.template.Type === "Out") ? "Unwrite" : "Write";
        return `${com}(${this.template.MainComponent.template.Name})`;
    }
}