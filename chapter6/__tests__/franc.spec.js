import Franc from '../franc';

describe('Franc', () => {
  describe('Equality', () => {
    it('returns true when comparing the same amounts', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
    });

    it('returns false when comparing the different amounts', () => {
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
    });
  });
});
