const power = (n1, n2) => ((n2 === 0) ? 1 : n1 * power(n1, n2 - 1));

describe('power라는 함수가 주어지면', () => {
  it('밑의 거듭제곱을 지수로 반환해야 합니다.', () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 1)).toBe(2);
    expect(power(2, 2)).toBe(4);
    expect(power(2, 3)).toBe(8);
    expect(power(2, 4)).toBe(16);
  });
});
