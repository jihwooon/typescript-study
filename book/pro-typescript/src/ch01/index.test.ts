describe('index', () => {
	it('should return 1', () => {
		type Prerson = {
			name: string;
			age: number;
		}

		function print() {
			return {name: 'John', age: 25};
		}

		const me = print();

		function printPerson (person: Prerson) {
			const print = `${person.name} ${person.age}`
			return print
		}

		const person = printPerson(me);

		expect(person).toBe("John 25")
	})
})