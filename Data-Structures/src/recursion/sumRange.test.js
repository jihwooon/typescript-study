const sumRange = (num) => {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
};

describe('재귀함수에 합의 값이 주어지면', () => {
  it('값을 리턴해야 한다.', () => {
    expect(sumRange(5)).toBe(15);
  });
});
