import { Dollar } from '../app';

describe('Multiplication', () => {
  const five = new Dollar(5);

  it('returns correct result when multiplying to 2', () => {
    expect(five.times(2)).toEqual(new Dollar(10));
  });


  it('returns correct result when multiplying to 3', () => {
    expect(five.times(3)).toEqual(new Dollar(15));
  });
});

describe('Equality', () => {
  it('returns true when comparing the same amounts', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  });

  it('returns false when comparing the different amounts', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
