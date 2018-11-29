import { Dollar } from '../app';

describe('Multiplication', () => {
  const five = new Dollar(5);

  it('returns correct result', () => {
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
