import { Combinable } from "./01";

/**
 * typeof 연산자
 */
const add = (a: Combinable, b: Combinable) =>
    (typeof a === 'string' || typeof b === 'string')
        ? a.toString() + b.toString()
        : a + b

console.log(add(1, 2));
console.log(add('1', '2'));

type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
}

type UnknownEmployee =
    | Employee
    | Admin

/**
 * in 연산자
 */
const printEmployeeInformation = (emp: UnknownEmployee) =>
    ('privileges' in emp)
        ? emp.privileges
        : ('startDate' in emp)
            ? emp.startDate
            : emp

console.log(printEmployeeInformation({ name: 'Manu', startDate: new Date(), privileges: ['test'] }))

/**
 * instanceof 연산자
 */
class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount)
    }
}

type Vehicle =
    | Car
    | Truck

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) =>
    vehicle instanceof Truck
        ? vehicle.loadCargo(1000)
        : vehicle.drive()

console.log(useVehicle(v1));
console.log(useVehicle(v2));
