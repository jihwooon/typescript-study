const capitalizeFirst = (arr) => {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].slice(1);

  res.push(str);

  return res;
};

describe('capitalizeFirst', () => {
  it('문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수를 작성하라', () => {
    expect(capitalizeFirst(['car'])).toStrictEqual(['Car']);
    expect(capitalizeFirst(['car', 'taco'])).toStrictEqual(['Car', 'Taco']);
  });
});
