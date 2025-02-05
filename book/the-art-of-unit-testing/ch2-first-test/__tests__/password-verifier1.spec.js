const context = describe;
const { 
    passingRule,
    makeVerifierWithPassingRule,
    makeVerifierWithFailedRule 
} = require('../test-utils');

describe('PasswordVerifier', () => {
    context('with a failing rule', () => {
        it('has an error message based on the rule.reason', () => { 
            const verifer = makeVerifierWithFailedRule('fake reason');
            const errors = verifer.verify('any value');

            expect(errors[0]).toContain('fake reason')
        })

        it('has exactly one error', () => { 
            const verifer = makeVerifierWithFailedRule('fake reason');
            const errors = verifer.verify('any value');

            expect(errors.length).toBe(1); 
        })
    })

    context('with a passing rule', () => {
        it('has no errors', () => { 
            const verifer = makeVerifierWithPassingRule()
            const errors = verifer.verify('any input')

            expect(errors.length).toBe(0); 
        })
    })

    context('with a failing and a passing rule', () => {
        it('has one error', () => { 
            const verifer = makeVerifierWithFailedRule('fake reasone')
            verifer.addRule(passingRule);
            const errors = verifer.verify('any input');

            expect(errors.length).toBe(1); 
        })

        it('error text belongs to failed rule', () => {
            const verifer = makeVerifierWithFailedRule('fake reasone')
            verifer.addRule(passingRule);
            const errors = verifer.verify('any input');

            expect(errors[0]).toContain('fake reason');
        })
    })
})
