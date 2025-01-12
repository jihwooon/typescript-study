let aNumber = 2;
let anthorNumber: number = 2;

type Prerson = {
	name: string;
	age: number;
}

function print() {
	return {name: 'John', age: 25};
}

const me = print();

function printPerson (person: Prerson) {
	console.log(person.name, person.age);
}

const person = printPerson(me);
