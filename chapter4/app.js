export class Dollar {
  constructor(amount) {
    this._amount = amount;
  }

  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }

  equals(dollar) {
    return this._amount === dollar._amount;
  }
}
