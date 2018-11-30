import { Franc, Money } from '../app';

describe('Multiplication', () => {
  describe('Dollar', () => {
    const five = Money.dollar(5);

    it('returns correct result when multiplying to 2', () => {
      expect(Money.dollar(10)).toEqual(five.times(2));
    });


    it('returns correct result when multiplying to 3', () => {
      expect(Money.dollar(15)).toEqual(five.times(3));
    });
  });

  describe('Franc', () => {
    const five = Money.franc(5);

    it('returns correct result when multiplying to 2', () => {
      expect(Money.franc(10)).toEqual(five.times(2));
    });


    it('returns correct result when multiplying to 3', () => {
      expect(Money.franc(15)).toEqual(five.times(3));
    });
  });
});

describe('Equality', () => {
  it('returns true when comparing the same amounts for Dollar', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  });

  it('returns false when comparing the different amounts for Dollar', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  });

  it('returns true when comparing the same amounts for Franc', () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  });

  it('returns false when comparing the different amounts for Franc', () => {
    expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  });

  it('returns false when comparing Franc to Dollar', () => {
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });
});

describe('Currency', () => {
  it('returns correct currency for Dollar', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
  });

  it('returns correct currency for Franc', () => {
    expect(Money.franc(1).currency()).toEqual('CHF');
  });
});

describe('DifferentClassEquality', () => {
  it('returns true when comparing Money to Franc', () => {
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toBe(true);
  });
});
