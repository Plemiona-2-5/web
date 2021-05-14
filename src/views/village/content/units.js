class Unit {
    constructor(imageSrc, span = 5) {
        this.imageSrc = imageSrc
        this.span = span
    }
}

let infantry = [
    new Unit(require('@/assets/image/units/pic.png'), 4),
    new Unit(require('@/assets/image/units/sword.png')),
    new Unit(require('@/assets/image/units/axe.png')),
]

let cavalry = [
    new Unit(require('@/assets/image/units/light.png')),
    new Unit(require('@/assets/image/units/heavy.png')),
]

export default {infantry, cavalry}