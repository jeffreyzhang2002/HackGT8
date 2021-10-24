export default class Scene {
    constructor() {
        this.MC = [];
        this.MA = [];
    }

    generate(name) {
        let lines = [];
        lines.push(`class ${name}(Scene):`)
        lines.push(`\tdef construct(self):`)

        this.MC.forEach(mc => {
            mc.generate().forEach(l => {
                lines.push(`\t\t${l}`)
            })
            lines.push('\n')
        })

        group(this.MA).forEach(g => {
            let anames = [];
            g.Anims.forEach(a => { anames.push(a.generate()) })
        })


    }
}

function group(anims) {
    let groups = [];
    let ctime = 0;
    let iStart = 0;
    for (let i = 0; i < anims.length; i++) {
        iStart = i;
        ctime = anims[i].template.StartTime;
        while ( (i < anims.length) && ((anims[i].template.StartTime - ctime) < 1)) {
            i++;
        }
        groups.push( {
            Time: ctime,
            Anims: anims.slice(iStart, i)
        })
        i--;
    }
    return groups;
}