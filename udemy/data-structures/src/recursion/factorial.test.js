const factorial = (num) => ((num === 1) ? 1 : num * factorial(num - 1));

describe('factorial 함수가 주어지면', () => {
  it('팩토리얼 수로 반환해야 합니다.', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
