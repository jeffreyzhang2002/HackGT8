import MAnimation from "./MAnimation";

export default class MTransform extends MAnimation {
    constructor() {
        super();
        this.template.Type = {
            ...this.template.Type,
            TargetComponent: undefined
        }
        this.template.Type = "Both"
        this.name = "Transform";
    }

    generate() {
        return `Transform(${this.template.MainComponent.template.Name}, ${this.template.TargetComponent.template.Name})`
    }
}
