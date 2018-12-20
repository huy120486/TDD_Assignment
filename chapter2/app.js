// Step 1
// export class Dollar {
//   constructor(amount) {
//     this.amount = amount;
//   }

//   times(multiplier) {
//     this.amount *= multiplier
//     return null
//   }
// }

// Step 2
export class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}
