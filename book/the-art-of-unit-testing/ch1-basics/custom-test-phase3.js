const { sum, totalSoFar } = require('./number-parser2')

const assertEquals = (expected, actual) => {
    if (actual !== expected) {
        throw new Error(`Expected ${expected} but was ${actual}`)
    }
}

const check = (name, implementation) => {
    try {
        implementation()
        console.log(`${name} passed`); 
    } catch (e) {
        console.error(`${name} FAILED`, e.stack)
    }
}

check('totalSoFar가 기본값이면 0을 리턴한다.', () => {
    assertEquals(0, totalSoFar())
})

check('sum에 값이 주어지면 totalSoFar는 sum 합의 값을 리턴한다.', () => {
    sum('1,2')
    sum('1,2')
    assertEquals(6, totalSoFar())
})
