const context = describe;

const { PasswordVerifier1 } = require('../password-verifier1')

describe('PasswordVerifier', () => {
    context('with a failing rule', () => {
        it('has an error message based on the rule.reason', () => {
            const verifier = new PasswordVerifier1();
            const fakeRule = () => ({ passed: false, reason: 'fake reason'})
       
            // verifier 객체에 fakeRule을 추가하여 상태를 변경
            verifier.addRule(fakeRule);
            // 변경된 상태를 기반으로 'any value'에 대한 검증을 수행
            const errors = verifier.verify('any value');
        
            expect(errors[0]).toContain('fake reason')
        })
    })
})
