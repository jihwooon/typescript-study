/**
 * 선택 정렬
 * 배열의 각 셀의 왼쪽부터 오른쪽 방향으로 확인하며 어떤 값이 가장 최소값인지 결정합니다.
 *
 */

describe('select sort', () => {
  const run = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }

      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }

    return arr;
  };

  context('배열 내 최소값을 찾을 때 ', () => {
    it('내림차순으로 정렬을 한다', () => {
      expect(run([34, 22, 10, 19, 17])).toStrictEqual([
        10, 17, 19, 22, 34,
      ]);
    });
  });
});
