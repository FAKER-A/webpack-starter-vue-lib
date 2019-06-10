import { sum } from '../utils/sum'

describe('test sum', () => {
  it('10 + 10 when passed', () => {
    expect(sum(10,10)).toBe(20)
  })
})