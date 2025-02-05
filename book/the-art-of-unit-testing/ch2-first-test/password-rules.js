const oneUpperCaseRule = (input) => {
    return {
        password: (input.toLowerCase() !== input),
        reason: 'at least one upper case needed'
    }
}

module.exports = {
    oneUpperCaseRule
}