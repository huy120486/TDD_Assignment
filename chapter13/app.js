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

  plus(addend) {
    return new Sum(this, addend);
  }

  reduce(to) {
    return this;
  }
}

export class Franc extends Money {
}

export class Bank {
  reduce(source, to) {
    return source.reduce(to);
  }
}

export class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const amount = this.augend._amount + this.addend._amount;
    return new Money(amount, to);
  }
}
