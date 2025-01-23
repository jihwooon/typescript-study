type Person = {
	name: string;
	age: number;
}

type User = {
	name: string;
	age: number;
	id: number;
}

// 형식의 모양이나 구조가 일치하면 같은 타입으로 간주한다.
// 프로퍼티가 더 많으면 상관없지만 더 적으면 에러가 발생한다
function print({ name, age }: Person) {
	return console.log(name, age);
}

const user: User = {
	name: 'John',
	age: 25,
	id: 1
}

print(user);
