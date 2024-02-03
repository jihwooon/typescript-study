/**
 * 인터섹션 타입
 */

type Admin = {
	name: string;
	privileges: string[]
};

type Employee = {
	name: string;
	startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
	name: 'MAX',
	privileges: ['create-server'],
	startDate: new Date()
}

export type Combinable = string | number;
export type Numeric = number | boolean;

type Universal = Combinable & Numeric;
