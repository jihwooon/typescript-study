const sum = (numbers) => { // 진입점
    const [a, b] = numbers.split(',');
    const result = parseInt(a) + parseInt(b);

    return result; // 반환 값
}

module.exports.sum = sum
