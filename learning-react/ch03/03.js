/**불변성 */
let color_lawn = {
    title: "잔디",
    color: "#00FF00",
    rating: 0
}

// 원본 데이터 구조를 변경하는 대신 구조를 복사 후 일부만 변경
const rageColor = (color, rating) => {
    color.rating = rating;
    return color;
}

console.log(rageColor(color_lawn, 5))

const rageColor1 = (color, rating) => Object.assign({}, color, { rating: rating })

console.log(rageColor1(color_lawn, 5))

const rageColor2 = (color, rating) => ({ ...color, rating: rating })

console.log(rageColor2(color_lawn, 5))

let list = [
    { title: '빨강 레드' },
    { title: '은하 갤럭시' },
    { title: '섬광 플래시' }
]

/* 불변성 함수가 아님 */
const addColor = (title, color) => {
    color.push({ title: title })
    return color;
}

console.log(addColor('장미 로즈', list))

// concat을 이용한 불변성
const addColor1 = (title, array) => array.concat({ title })

console.log(addColor1("혼돈 카오스", list))

// 스프레드 연산자로 배열 복사
const addColor2 = (title, array) => [...array, { title }];

console.log(addColor2("번개 스파크", list))

