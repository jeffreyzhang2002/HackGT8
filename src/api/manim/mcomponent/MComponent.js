
export default class MComponent {

    constructor() {
        this.template = {
            Position:{
                X: 0,
                Y: 0,
            },
            Fill: {
                Enabled: false,
                Opacity: 0,
                Color: 0,
            },
            Stroke: {
                Enabled: false,
                Width: 0,
                Opacity: 0,
                Color: 0,
            }
        }
    }

    generate() {
        console.log("nope, you didn't implement the fucking method")
    }

}
