describe('블록 스코프', () => {
  it('블록 내 var 변수 선언하고 블록 외부에서 값을 리턴한다', () => {
    const run = (a) => {
      for (let i = 0; i < a.length; i++) {
        var value = a[i];
      }
      return value;
    };

    expect(run([1, 2, 3])).toBe(3);
  });

  it('블록 내 let 변수 선언하고 블록 내부에서 값을 리턴한다', () => {
    const run = (a) => {
      for (let i = 0; i < a.length; i++) {
        const value = a[i];
        return value;
      }
    };

    expect(run([1, 2, 3])).toBe(1);
  });
});
