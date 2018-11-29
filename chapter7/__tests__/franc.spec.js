import Franc from '../franc';
import Dollar from '../dollar';

describe('Franc', () => {
  describe('Equality', () => {
    it('returns true when comparing the same amounts', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
    });

    it('returns false when comparing the different amounts', () => {
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
    });

    it('returns false when comparing Franc to Dollar', () => {
      expect(new Franc(5).equals(new Dollar(5))).toBe(false);
    });
  });
});
