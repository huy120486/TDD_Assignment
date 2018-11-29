class Money {
  constructor(amount) {
    this._amount = amount;
  }

  equals(money) {
    return this._amount === money._amount;
  }
}

export class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}
