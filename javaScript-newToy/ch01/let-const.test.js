describe('let과 const 선언', () => {
  it('let 변수 선언하고 값을 초기화 하면 값을 리턴한다', () => {
    let x = 2;
    x += 40;

    expect(x).toBe(42);
  });

  it('let 변수를 초기화를 안하면 undefined를 리턴한다', () => {
    let x;

    expect(x).toBe(undefined);
  });

  it('const 변수를 0.5 이하 값을 초기화하면 윗면을 리턴한다', () => {
    const value = 0.2;
    const result = value < 0.5 ? '윗면' : '아랫면';

    expect(result).toBe('윗면');
  });
});
