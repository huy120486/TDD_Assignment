class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equal(dollar) {
    return this.amount === dollar.amount;
  }
}

export default Dollar;
