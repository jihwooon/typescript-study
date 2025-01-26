let total = 0;

const totalSoFar = () => {
    return total;
}

const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    const result = parseInt(a, 10) + parseInt(b, 10);

    total += result;
    return result;
}

sum('1, 2')
sum('1, 2')

console.log(totalSoFar());
