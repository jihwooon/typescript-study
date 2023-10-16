describe('binary search', () => {
  const run = (arr, index) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (arr[mid] !== index && left <= right) {
      if (index < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
    if (arr[mid] === index) {
      return mid;
    }

    return -1;
  };

  describe('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하면', () => {
    it('배열 자릿수를 반환한다 ', () => {
      expect(run([1, 2, 3, 4, 5], 2)).toBe(1);
    });
  });

  describe('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하지 않으면', () => {
    it('-1를 반환한다 ', () => {
      expect(run([1, 2, 3, 4, 5], 6)).toBe(-1);
      expect(run([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toBe(-1);
    });
  });
});
