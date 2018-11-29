class Money {
  constructor(amount) {
    this._amount = amount;
  }

  equals(money) {
    return this._amount === money._amount
      && this.constructor.name === money.constructor.name;
  }
}

export default Money;
