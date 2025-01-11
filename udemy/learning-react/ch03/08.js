const age = [21, 18, 42, 40, 64, 63, 35]

const maxAge = age.reduce((max, age) => {
    console.log('age: ' + age + ', ' +'max: ' + max)
    if (age > max) {
        return age;
    } else {
        return max
    }
}, 0)

console.log(maxAge)

const colors = [
    { id: 'xekare', title: '과격한 빨강', rating: 3 },
    { id: 'jbwsof', title: '큰 파랑', rating: 31 },
    { id: 'prigbj', title: '회색곰 회색', rating: 2 },
    { id: 'ryhbhsl', title: '바나나', rating: 1 }
]

const hashColor = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
}, {})

console.log(hashColor)
