import { formatNumber } from "./format"

describe('format', () => {
  it('천 단위 숫자가 주어졌을 때 3자리씩 끊어서 쉼표로 포맷해야 한다', () => {
    const fomatedNumber = formatNumber(1000);

    expect(fomatedNumber).toBe('1,000');
  })

  it('백만 단위 숫자가 주어졌을 때 3자리씩 끊어서 쉼표로 포맷해야 한다', () => {
    const fomatedNumber = formatNumber(1000000);

    expect(fomatedNumber).toBe('1,000,000');
  })

  it('억 단위 숫자가 주어졌을 때 3자리씩 끊어서 쉼표로 포맷해야 한다', () => {
    const fomatedNumber = formatNumber(100000000);

    expect(fomatedNumber).toBe('100,000,000');
  })

  it('조 단위 숫자가 주어졌을 때 3자리씩 끊어서 쉼표로 포맷해야 한다', () => {
    const fomatedNumber = formatNumber(1000000000000);

    expect(fomatedNumber).toBe('1,000,000,000,000');
  })
})
