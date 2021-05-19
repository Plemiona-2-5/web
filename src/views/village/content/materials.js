class Material {
    constructor(imageSrc) {
        this.imageSrc = imageSrc
    }
}

let materialTypes = [
    new Material(require('@/assets/image/materials/wood.png'), "Wood"),
    new Material(require('@/assets/image/materials/clay.png'), "Clay"),
    new Material(require('@/assets/image/materials/iron.png'), "Iron"),
    new Material(require('@/assets/image/materials/villagers.jpg'), "Villagers"),
]

export default materialTypes