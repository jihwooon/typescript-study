const { PasswordVerifier1 } = require('../password-verifier1')

const makeVerifier = () => new PasswordVerifier1()
const passingRule = () => ({ passed: true, reason: '' })

const makeVerifierWithPassingRule = () => {
    const verifer = makeVerifier()
    verifer.addRule(passingRule);

    return verifer;
}

const makeVerifierWithFailedRule = (reason) => { 
    const verifier = new PasswordVerifier1()
    const fakeRule = () => ({ passed: false, reason })  
    verifier.addRule(fakeRule);

    return verifier;
}

module.exports = {
    makeVerifier,
    passingRule,
    makeVerifierWithPassingRule,
    makeVerifierWithFailedRule
} 