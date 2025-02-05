const { 
    passingRule,
    makeVerifierWithPassingRule,
    makeVerifierWithFailedRule 
} = require('./test-utils');

test('with a failing rule: has an error message based on the rule.reason', () => { 
    const verifer = makeVerifierWithFailedRule('fake reason');
    const errors = verifer.verify('any value');
    expect(errors[0]).toContain('fake reason')
});

test('with a failing rule: has exactly one error', () => { 
    const verifer = makeVerifierWithFailedRule('fake reason');
    const errors = verifer.verify('any value');
    expect(errors.length).toBe(1); 
});

test('with a passing rule: has no errors', () => { 
    const verifer = makeVerifierWithPassingRule()
    const errors = verifer.verify('any input')
    expect(errors.length).toBe(0); 
});

test('with a failing and a passing rule: has one error', () => { 
    const verifer = makeVerifierWithFailedRule('fake reasone')
    verifer.addRule(passingRule);
    const errors = verifer.verify('any input');
    expect(errors.length).toBe(1); 
});

test('with a failing and a passing rule: error text belongs to failed rule', () => {
    const verifer = makeVerifierWithFailedRule('fake reasone')
    verifer.addRule(passingRule);
    const errors = verifer.verify('any input');
    expect(errors[0]).toContain('fake reason');
});
