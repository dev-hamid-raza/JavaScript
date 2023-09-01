class animals {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getFullDetails() {
        const fullDetail = `This  is a ${this.name}, ${this.age} years old with ${this.color} color and which have ${this.legs}`
        return fullDetail
    }
}

const animalOne = new animals('Rocked', 14, 'black', 4)
console.log(animalOne.getFullDetails())

class animals extends dog {
    
}