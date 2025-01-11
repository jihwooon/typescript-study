const productOfArray = (arr) => (arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1)));

describe('productOfArray', () => {
  it('숫자 배열을 받아 모든 숫자의 곱을 반환하라', () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
  });
});
