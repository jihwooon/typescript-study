type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // number 타입

function add(a: string, b: number): string
function add (a: string, b: string): string;
function add (a: number, b: number): number
function add (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
}

console.log(add(1, 2));

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation({ name: 'Max', privileges: ['create-server'], startDate: new Date() });

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

type StringAndNumber = string & number; // never 타입

type Animal = {
    species: string;
    age: number;
}

type Human  = Animal & {
    name: string;
}

const nabi: Animal = {
    species: 'cat',
    age: 3
}

const max: Human = {
    name: 'Max',
    species: 'homosapiens',
    age: 30
}

interface Bird {
    type: 'bird'
    flyingSpeed: number;
}

interface Horse { 
    type: 'horse'
    runningSpeed: number;
}

type BirdOrHorse = Bird | Horse;

const moveAnimal = (animal: BirdOrHorse) => {
    if ('flyingSpeed' in animal) {
        console.log('Moveing with flyingSpeed: ' + animal.flyingSpeed); 
    }

    if ('runningSpeed' in animal) {
        console.log('Moveing with runningSpeed: ' + animal.runningSpeed); 
    }

    let speed;
    switch(animal.type) {
        case 'bird':
        speed = animal.flyingSpeed;
        break;
        case 'horse':
        speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed); 
}

moveAnimal({type: 'bird' , flyingSpeed: 100})
moveAnimal({type: 'horse' , runningSpeed: 300})

const userInputEmplemt = document.getElementById('user-input') as HTMLInputElement

if (userInputEmplemt) {
    (userInputEmplemt as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
}

const result = add('Max', 5);
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
}

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
