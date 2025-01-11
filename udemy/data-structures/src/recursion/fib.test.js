const fib = (x) => (x > 2 ? fib(x - 1) + fib(x - 2) : 1);

describe('fib', () => {
  it('숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하라', () => {
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
  });
});
