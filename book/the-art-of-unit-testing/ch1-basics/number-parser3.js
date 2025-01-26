let total = 0;

const totalSoFar = () => total;

const createLogger = () => {
    return {
        firstNumWas: 'a',
        secondNumWas: 'b',
    }
}

const makeLogger = () => {
    return createLogger()
}

const logger = makeLogger();

const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    const result = parseInt(a, 10) + parseInt(b, 10);
    total += result;

    console.log(logger);
     
    return result;
}

sum('1,3');
sum('1,3');

console.log(totalSoFar());
