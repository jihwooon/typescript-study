const { oneUpperCaseRule } = require('../password-rules')

describe('one uppercase rule', () => {
    test.each([
        'ABC', 'aBc'
    ])('given one uppercase, it passes', (input) => {
        const result = oneUpperCaseRule(input);

        expect(result.password).toEqual(true)
    })

    test.each([
        ['ABC', true], 
        ['aBc', true], 
        ['abc', false]
    ])('given %s, %s', (input, expected) => {
        const result = oneUpperCaseRule(input);

        expect(result.password).toEqual(expected);
    })
})
