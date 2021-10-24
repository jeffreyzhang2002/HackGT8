import MComponent from "./MComponent";

export default class MText extends MComponent {
    constructor() {
        super();
        this.template = {
            ...this.template,
            Text: "Sample Text",
            FontSize: 11
        }
    }

    generate() {
        let lines = [];
        let params = [];
        params.push(`tex_strings=${this.template.Text}`);
        params.push(`font_size=${this.template.FontSize}`);
        lines.push(`${this.template.Name} = Text(${params.join(", ")})`);

        if ((this.template.Pose.X !== 0) || (this.template.Pose.Y !== 0)) {
            super.generatePosition().forEach(s => {lines.push(s)});
        }

        super.generateFillStroke().forEach(s => {lines.push(s)});

        return lines;
    }
}