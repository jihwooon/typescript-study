const recursiveRange = (x) => (x > 1 ? x + recursiveRange(x - 1) : 1);

describe('recursiveRange', () => {
  it('0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오', () => {
    expect(recursiveRange(6)).toBe(21);
    expect(recursiveRange(10)).toBe(55);
  });
});
