import { Combinable } from "./01";

/**
 * 호출 시그니처
 */
type add = (a: number | string, b: number | string) => number | string;
const add = (a: Combinable, b: Combinable) => {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}

	return a + b
}

const result = add('1', 5);
console.log(result);
