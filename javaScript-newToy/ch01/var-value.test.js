describe('var 변수', () => {
  it('var 변수 선언하고 동일한 변수명을 재선언한 값을 리턴한다', () => {
    var x = 'first';
    var x = 'last';

    expect(x).toBe('last');
  });

  it('var 선언 시 호이스팅이 발생하고 맨 위 선언한 변수 값을 리턴한다', () => {
    const run = () => {
      return answer = 42;

      var answer = 67;
    };

    expect(run()).toBe(42);
  });
});
