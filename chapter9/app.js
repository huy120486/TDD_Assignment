export class Money {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  equals(money) {
    return this._amount === money._amount
      && this.constructor.name === money.constructor.name;
  }

  static dollar(amount) {
    return new Dollar(amount, 'USD');
  }

  static franc(amount) {
    return new Franc(amount, 'CHF');
  }

  currency() {
    return this._currency;
  }
}

export class Dollar extends Money {
  times(multiplier) {
    return Money.dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier) {
    return Money.franc(this._amount * multiplier);
  }
}
