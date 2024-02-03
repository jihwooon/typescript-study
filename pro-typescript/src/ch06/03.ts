/**
 * 식별 할 수 있는 유니온
 */
interface Bird {
    type: 'bird'
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

const assertExhausted = (x: never): never => {
    throw new Error(`Unexpected object: ${x}`)
}

const moveAnimal = (animal: Animal) => {
    switch (animal.type) {
        case 'bird': return animal.flyingSpeed
        case 'horse': return animal.runningSpeed
        default: assertExhausted(animal)
    }
}

console.log(moveAnimal({ 'type': 'bird', flyingSpeed: 200 }))
console.log(moveAnimal({ 'type': 'horse', runningSpeed: 100 }))
