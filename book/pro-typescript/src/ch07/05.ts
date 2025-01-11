/**
 * keyof 연산자
 * 
 * 객체의 키값을 타입으로 추출하기
 */
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));


interface ColorType {
    red: string;
    green: string;
    blue: string;
}

type ColorKeyType = keyof ColorType
