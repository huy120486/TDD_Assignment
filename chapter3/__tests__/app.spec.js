import { Dollar } from '../app';

describe('Dollar', () => {
  describe('Multiplication', () => {
    const five = new Dollar(5);

    it('returns correct result when multiplying to 2', () => {
      const product = five.times(2);
      expect(product.amount).toEqual(10);
    });


    it('returns correct result when multiplying to 3', () => {
      const product = five.times(3);
      expect(product.amount).toEqual(15);
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
});
