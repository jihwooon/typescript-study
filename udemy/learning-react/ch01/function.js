// 함수 선언: logCompliment 함수를 정의하고 호출합니다. 함수 선언은 호이스팅됩니다.
function logCompliment() {
  console.log('잘했어요')
}

logCompliment()

// 함수 표현식: hey 함수를 정의하고 호출합니다. 함수 표현식은 호이스팅되지 않습니다.
const hey = function() {
  console.log('hey')
}

hey()
