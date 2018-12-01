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

  reduce(bank, to) {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }
}

export class Franc extends Money {
}

export class Bank {
  constructor() {
    this._rates = new Map();
  }

  reduce(source, to) {
    return source.reduce(this, to);
  }

  addRate(from, to, rate) {
    this._rates.set(pair(from, to), rate);
  }

  rate(from, to) {
    if (from === to) return 1;
    const rate = this._rates.get(pair(from, to));
    return rate;
  }
}

export class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend.reduce(bank, to)._amount
                 + this.addend.reduce(bank, to)._amount;
    return new Money(amount, to);
  }
}

export function pair(from, to) {
  return `${from}-${to}`;
}
