/**
 * Merge Sort(병합 정렬)
 * 배열이 정렬되어 있다고 가정하고 정렬된 배열 두 개의 조합을 반환합니다
 * 
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

  context('두 배열이 주어졌을 때 ', () => {
    it('오름차순으로 정렬하여 두 배열을 조합한다', () => {
      expect(
        run([1, 10, 50], [2, 14, 99, 100]),
      ).toStrictEqual([1, 2, 10, 14, 50, 99, 100]);
    });
  });
});
