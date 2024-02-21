const isPalindrome = (str) => {
  if (str.length === 1) return true;
  if (str[0] === str[1]) return true;
  return str[0] === str.slice(-1) ? isPalindrome(str.slice(1, -1)) : false;
};

describe('재귀함수에 합의 값이 주어지면', () => {
  it('전달된 문자열이 팔린드롬 인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하라', () => {
    expect(isPalindrome('tt')).toBe(true);
    expect(isPalindrome('taoat')).toBe(true);
  });
});
