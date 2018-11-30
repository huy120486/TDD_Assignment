export class Money {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  equals(money) {
    return this._amount === money._amount
      && this.currency() === money.currency();
  }

  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }

  currency() {
    return this._currency;
  }

  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency);
  }
}

export class Franc extends Money {
}
