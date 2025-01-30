const context = describe;

const { verifyPassword } = require('../password-verifier0')

describe('verify Password', () => {
    context('given a failing rule', () => {
        it('return errors', () => {
            const fakeRule = () => ({ passed: false, reason: 'fake reason'})
        
            const errors = verifyPassword('any value', [fakeRule])
        
            expect(errors[0]).toContain('fake reason')
        })
    })
})
