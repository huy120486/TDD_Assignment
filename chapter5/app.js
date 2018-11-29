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

export class Franc {
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
