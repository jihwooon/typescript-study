describe('bubble sort', () => {
  const swap = (arr, j) => {
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  };

  const run = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j);
        }
      }
    }
    return arr;
  };
  describe('순서를 고려하지 않은 배열이 주어졌을 때 ', () => {
    it('버블 정렬로 배열을 정렬한다', () => {
      expect(run([10, 24, 76, 73, 72, 1, 9])).toStrictEqual([1, 9, 10, 24, 72, 73, 76]);
    });
  });
});
