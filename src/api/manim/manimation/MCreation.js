import MAnimation from "./MAnimation";

export default class MCreation extends MAnimation {
    constructor() {
        super();
    }

    generate() {
        let com = (this.template.Type === "Out") ? "Uncreate" : "Create";
        return `${com}(mobject=${this.template.MainComponent.template.Name})`;
    }
}