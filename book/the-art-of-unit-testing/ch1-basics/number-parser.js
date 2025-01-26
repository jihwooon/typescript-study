const sum = (numbers) => { // 진입점
    const [a, b] = numbers.split(',');
    const result = parseInt(a) + parseInt(b);

    return result; // 반환 값
}

console.log(sum('1,2,3'));
