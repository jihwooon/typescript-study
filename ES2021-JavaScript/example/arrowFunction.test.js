var array = [42, 67, 3, 23, 14];

var filtered = array.filter(function(entry) {
  return entry < 30;
})

test('함수 본문을 테스트한다', () => {
  expect(filtered).toStrictEqual([3, 23, 14]);
});

var filteredEntry = array.filter((entry) => entry < 30)

test('화살표 함수를 테스트한다', () => {
  expect(filteredEntry).toStrictEqual([3, 23, 14]);
});
