const reverse = (str) => (str.length <= 0 ? str : reverse(str.slice(1)) + str[0]);

describe('sumRange', () => {
  it('그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성하라', () => {
    expect(reverse('awesome')).toBe('emosewa');
  });
});
