const winston = require('winston')

let total = 0;

const totalSoFar = () => total;

const makeLogger = () => {
    return winston.createLogger({
        level: 'info',
        transports: new winston.transports.Console(),
    })
}

const logger = makeLogger();

const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    const result = parseInt(a, 10) + parseInt(b, 10);
    total += result;

    logger.info('this is a very important log output', {
        firstNumWas: a,
        secondNumWas: b
    })
     
    return result;
}

sum('1,3');
sum('1,3');

console.log(totalSoFar());
