const color = ['red', 'red', 'green', 'blue', 'green']

const uniqueColors = color.reduce((unique, color) => unique.indexOf(color) !== -1 ? unique : [...unique, color], [])

console.log(uniqueColors);

const num = [1, 2, 3, 4];
const sum = num.reduce((prev, curr) => {
    console.log('prev : '+ prev + ', '+ 'curr : ' + curr)
  return prev + curr;
});

console.log(sum);
