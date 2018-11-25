import Dollar from '../dollar';

describe('Dollar', () => {
  describe('multiplication', () => {
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
});
