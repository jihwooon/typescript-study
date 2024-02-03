const countDown = (num) => {
  if (num <= 0) {
    return 'All Done';
  }

  return countDown(num - 1);
};

describe('재귀함수가 기본 함수가 0이면', () => {
  it('All Done을 리턴해야 한다.', () => {
    expect(countDown(5)).toBe('All Done');
  });
});
