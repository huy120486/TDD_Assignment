class Franc {
  constructor(amount) {
    this._amount = amount;
  }

  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }

  equals(franc) {
    return this._amount === franc._amount;
  }
}

export default Franc;
