const { sum } = require('./number-parser')

const parserTest = () => {
    try {
        const result = sum('1,2')
        if(result === 3) {
            console.log('parsetTest example 1 PASSED');  
        } else {
            throw new Error(`parserTest: expected 3 but was ${result}`)
        }
    } catch(e) {
        console.error(e.stack)
    }
}

parserTest();
