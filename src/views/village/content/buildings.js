import slugger from "slugger";

class Building {
    constructor(name, imageSrc, span = 8, offset = 0) {
        this.name = name
        this.imageSrc = imageSrc
        this.span = span
        this.offset = offset
        this.path = slugger(this.name)
    }
}

let buildingsRows = {
    firstRow: [
        new Building("mine", require('@/assets/image/materials/wood.png')),
        new Building("farm", require('@/assets/image/materials/wood.png'), 8, 16),
    ],
    secondRow: [
        new Building("granary", require('@/assets/image/materials/wood.png')),
        new Building("town hall", require('@/assets/image/materials/wood.png')),
        new Building("barracks", require('@/assets/image/materials/wood.png')),
    ],
    thirdRow: [
        new Building("brick yard", require('@/assets/image/materials/wood.png'), 4),
        new Building("lumber mill", require('@/assets/image/materials/wood.png'), 4, 20),
    ]
}

export default buildingsRows