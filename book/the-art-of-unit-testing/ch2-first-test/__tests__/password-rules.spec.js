const { oneUpperCaseRule } = require('../password-rules')

describe('one uppercase rule', () => {
    it('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('abc');

        expect(result.password).toEqual(false)
    })

    it('given no uppercase, it passes', () => {
        const result = oneUpperCaseRule('ABC');

        expect(result.password).toEqual(true)
    })

    it('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('aBc');

        expect(result.password).toEqual(true)
    })
})
