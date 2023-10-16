describe('naive search', () => {
  const run = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
        if (long[i + j] !== short[j]) break;
        if (j === short.length - 1) count++;
      }
    }
    return count;
  };

  describe('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하면', () => {
    it('존재한 인덱스 수를 반환한다 ', () => {
      expect(run('lorie loled', 'lol')).toBe(1);
    });
  });

  describe('배열과 검색 할 인덱스가 주어지고 인덱스 값이 존재하지 않으면', () => {
    it('0를 반환한다 ', () => {
      expect(run('lorie loled', 'lolw')).toBe(0);
    });
  });
});
