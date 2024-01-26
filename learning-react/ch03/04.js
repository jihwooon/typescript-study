/** 순수 함수 */
// 파라미터에 의해서만 반환값이 결정되는 함수
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
}

const selfEducate = () => {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}

const selfEducate1 = (person) => {
    frederick.canRead = true;
    frederick.canWrite = true;
    return person;
}

// 인자 값을 전달 받고 불변 데이터로 순수함수를 얻을 수 있다.
const selfEducatePure = (person) => ({
    ...person,
    canRead : true,
    canWrite : true
})

console.log(selfEducate1(frederick))