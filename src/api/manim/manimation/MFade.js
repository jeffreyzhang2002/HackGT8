import MAnimation from "./MAnimation";

export default class MFade extends MAnimation {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Scale: 1,
            Shift: "None"
        }
        this.name = "Fade";
    }

    generate() {
        let com = (this.template.Type === "Out") ? "FadeOut" : "FadeIn";
        let params = [];
        params.push(`mobject=${this.template.MainComponent.template.Name}`);
        if (this.template.Scale !== 1) {
            params.push(`scale=${this.template.Scale}`);
        }
        if (this.template.Shift !== "None") {
            params.push(`shift=${this.template.Scale}`);
        }

        let allparams = params.join(", ");
        return `${com}(${allparams})`
    }
}
