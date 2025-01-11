const sandwich = {
  bread: 'whole grain',
  meat: 'turkey',
  cheese: 'cheddar',
  toppings: ['lettuce', 'tomato', 'onion']
};

// 스프레드 연산자: 객체나 배열을 펼쳐서 개별 요소로 분리합니다.
const {bread, meat} = sandwich;
console.log(bread);
console.log(meat)

const [firstAnimal] = ["캥거루", "웜뱃", "코알라"]
console.log(firstAnimal)

const morning = {
  breakfast: "미역국",
  lunch: "삼치구이"
}

const dinner = "스테이크 정식"

// 스프레드 연산자: 다른 객체의 속성을 복사하여 새로운 객체를 만듭니다.
const backpackingMeals = {
  ...morning,
  dinner
}

console.log(backpackingMeals)

function directions(...arg) {
 const [start, ...remaining] = arg;

 console.log(`${arg.length} 도시를 운행합니다.`)
 console.log(`${start}에서 출발합니다`)
  console.log(`남은 역의 도시 ${remaining.length} 입니다.`)
}

directions("서울", "부산", "천안")
