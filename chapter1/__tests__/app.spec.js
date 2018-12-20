import { Dollar } from '../app';

// Step 1

// describe('Multiplication', () => {
//   const five = new Dollar(5);

//   it('returns correct result', () => {
//     five.times(2);
//     expect(five.amount).toEqual(10);
//   });
// });

// Step 2

describe('Multiplication', () => {
  const five = new Dollar(5);

  it('returns correct result', () => {
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
