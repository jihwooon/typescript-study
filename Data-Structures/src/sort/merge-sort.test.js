/**
 * Merge Sort(병합 정렬)
 * 배열이 정렬되어 있다고 가정하고 정렬된 배열 두 개의 조합을 반환합니다
 *
 * 1. 빈 배열을 생성하고, 각 입력 배열에서 가장 작은 값을 확인합니다
 * 2. 첫 번째 배열의 값이 두 번째 배열의 값보다 작으면 첫번째 배열의 값을 빈 배열에 삽입합니다.
 * 3. 첫 번째 배열의 값이 두 번째 배열의 값보다 크면 두번째 배열의 값을 빈 배열에 삽입합니다.
 * 4. 두 모든 배열을 다 삽압히면 나머지는 모두 밀어넣습니다
 */

describe('merge sort', () => {
  const run = (arr1, arr2) => {
    const answer = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        answer.push(arr1[i++]);
      } else {
        answer.push(arr2[j++]);
      }
    }

    while (i < arr1.length) {
      answer.push(arr1[i++]);
    }

    while (j < arr2.length) {
      answer.push(arr2[j++]);
    }

    return answer;
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return run(left, right);
  };

  test('부분 정렬이 주어졌을 때 ', () => {
    it('오름차순으로 정렬한다', () => {
      expect(
        mergeSort([10, 24, 76, 73, 72, 1, 9]),
      ).toStrictEqual([1, 9, 10, 24, 72, 73, 76]);
    });
  });
});
