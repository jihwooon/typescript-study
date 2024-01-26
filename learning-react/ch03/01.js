/** 함수형 프로그래밍*/

// 함수
var log = function (message) {
    console.log(message)
}

log("자바스크립트에서는 함수를 변수에 넣을 수 있습니다.")

// 화살표 함수
const log1 = (message) => console.log(message);

log1("자바스크립트에서는 함수를 변수에 넣을 수 있습니다.")

// 객체 내 함수
const obj = {
    message: "자바스크립트에서는 함수를 변수에 넣을 수 있습니다.",
    log(message) {
        console.log(message)
    }
}

obj.log(obj.message)

// 배열 내 함수
const messages = [
    "자바스크립트에서는 함수를 변수에 넣을 수 있습니다.",
    message => console.log(message),
    "일반적인 값과 마찬가지 입니다.",
    message => console.log(message),
]

messages[1](messages[0])
messages[3](messages[2])

// 함수 내 인자 함수
const insideFn = logger => {
    logger("함수를 다른 함수에 인자로 넘길수도 있습니다.")
}

insideFn(message => console.log(message))

const createScream = logger => message => logger(message.toUpperCase() + '!!!');

createScream(message => logger(console.log(message)));

