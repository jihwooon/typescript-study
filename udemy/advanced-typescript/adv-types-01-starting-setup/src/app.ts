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

const add = (a: Combinable, b: Combinable) => {
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
