/**
 * Index Signatures(=인덱스 시그니처)
 */
interface ErrorContainer {
	[key: string] : string
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email',
	username: 'Must start with a capital character!'
}

console.log(errorBag);
