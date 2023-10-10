describe('liner search', () => {
  const run = (arr, index) => {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === index) {
        return i;
      }
    }
    return -1;
  };

  test('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하면', () => {
    it('배열 자릿수를 반환한다 ', () => {
      expect(run([10, 15, 20, 25, 30], 15)).toBe(1);
      expect(run([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5);
    });
  });

  test('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하지 않으면', () => {
    it('-1를 반환한다 ', () => {
      expect(run([1, 2, 3, 4, 5], 6)).toBe(-1);
      expect(run([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toBe(-1);
    });
  });
});
