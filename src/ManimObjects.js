import MCircle from "./api/manim/mcomponent/MCircle";
import MLine from "./api/manim/mcomponent/MLine";
import MPoint from "./api/manim/mcomponent/MPoint";
import MRectangle from "./api/manim/mcomponent/MRectangle";

const ManimObjects = {
    Geometry: {
        Line: MLine,
        Rectangle: MRectangle,
        Circle: MCircle,
        Point: MPoint,
    },

    Animation: {
        Fade: "File",
        Appear: "File",
        Move: "File",
    },
}

export default ManimObjects;
