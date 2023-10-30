describe('호이스팅', () => {
  it('var 변수 선언하고 동일한 변수명을 재선언한 값을 리턴한다', () => {
    let answer;

    function hoistion() {
      answer = 42;

      let answer;
      return answer;
    }
    expect(hoistion()).toBe(42);
  });

  it('var 변수 선언하고 동일한 변수명을 재선언한 값을 리턴한다', () => {
    function temporalExample() {
      const f = () => {
        console.log(value)
        return value;
      };
      let value = 42;
      f();
    }

    expect(temporalExample()).toBe(42);
  });
});
