
export default class MComponent {

    constructor() {
        this.template = {
            Name: undefined,
            X: undefined,
            Y: undefined,
            Fill: {
                Enabled: false,
                Opacity: undefined,
                Color: undefined,
            },
            Stroke: {
                Enabled: false,
                Width: undefined,
                Opacity: undefined,
                Color: undefined,
            }
        }
    }

    generate() {
        console.log("nope, you didn't implement the fucking method")
    }

}