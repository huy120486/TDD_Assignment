// Step 1
// export class Dollar {
// }

// Step 2
// export class Dollar {
//   times() {}
// }

// Step 3
// export class Dollar {
//   constructor() {
//     this.amount = 10;
//   }
//   times() {}
// }

// Step 4
// export class Dollar {
//   constructor() {
//     this.amount = 5 * 2;
//   }
//   times() {}
// }

// Step 5
// export class Dollar {
//   constructor(amount) {
//     this.amount = amount;
//   }
//   times() {
//     this.amount = this.amount * 2;
//   }
// }

// Step 6
// export class Dollar {
//   constructor(amount) {
//     this.amount = amount;
//   }
//   times(multiplier) {
//     this.amount = this.amount * multiplier;
//   }
// }

// Step 7
export class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount *= multiplier;
  }
}
