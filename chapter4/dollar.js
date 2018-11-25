class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equal(dollar) {
    return this._amount === dollar._amount;
  }
}

export default Dollar;
