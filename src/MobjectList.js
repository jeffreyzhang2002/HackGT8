import MCircle from "./api/manim/mcomponent/MCircle";
import MLine from "./api/manim/mcomponent/MLine";
import MPoint from "./api/manim/mcomponent/MPoint";
import MRectangle from "./api/manim/mcomponent/MRectangle";

import MCreation from "./api/manim/manimation/MCreation";
import MFade from "./api/manim/manimation/MFade";
import MTransform from "./api/manim/manimation/MTransform";
import MWrite from "./api/manim/manimation/MWrite";

const MobjectList = {
    Geometry: {
        Line: MLine,
        Rectangle: MRectangle,
        Circle: MCircle,
        Point: MPoint,
    },

    Animation: {
        Creation: MCreation,
        Fade: MFade,
        Transform: MTransform,
        Write: MWrite,
    },
}

export default MobjectList;
