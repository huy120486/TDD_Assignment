import Money from './money';

class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}

export default Franc;
