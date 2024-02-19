const merge = (arr1, arr2) => {
  const answer = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
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
  return merge(left, right);
};

describe('merge', () => {
  it('', () => {
    expect(merge([78, 69, 28], [1, 3, 4, 2, 78])).toStrictEqual([1, 3, 4, 2, 78, 78, 69, 28]);
  });
});

describe('mergeSort', () => {
  it('', () => {
    expect(mergeSort([78, 78, 69, 28, 1, 3, 4, 2])).toStrictEqual([1, 2, 3, 4, 28, 69, 78, 78]);
  });
});
