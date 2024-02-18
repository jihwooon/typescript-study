const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
};

describe('productOfArray', () => {
  it('숫자 배열을 받아 모든 숫자의 곱을 반환하라', () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
  });
});
