'use strict';

const { getTribonacciSequence } = require('./getTribonacciSequence');

describe(`Function 'getTribonacciSequence':`, () => {
  it(`should be declared`, () => {
    expect(getTribonacciSequence).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getTribonacciSequence([1, 1, 1], 5)).toBeInstanceOf(Array);
  });

  it(`should return an empty array if n = 0`, () => {
    expect(getTribonacciSequence([1, 3, 5], 0)).toEqual([]);
  });

  it(`should return the first element of a sequence if n = 1`, () => {
    expect(getTribonacciSequence([3, 6, 2], 1)).toEqual([3]);
  });

  it(`should return the first two elements of a sequence if n = 2`, () => {
    expect(getTribonacciSequence([4, 8, 16], 2)).toEqual([4, 8]);
  });

  it(`should return the first three elements of a sequence if n = 3`, () => {
    expect(getTribonacciSequence([1, 5, 9], 3)).toEqual([1, 5, 9]);
  });

  it(`should return the first five elements of a sequence if n = 5`, () => {
    expect(getTribonacciSequence([3, 8, 5], 5)).toEqual([3, 8, 5, 16, 29]);
  });

  it(`should return the first eight elements of a sequence if n = 8`, () => {
    expect(getTribonacciSequence([2, 4, 6], 8)).toEqual([
      2, 4, 6, 12, 22, 40, 74, 136,
    ]);
  });

  it(`should return the first thirteen elements of a sequence if n = 13`, () => {
    expect(getTribonacciSequence([10, 20, 30], 13)).toEqual([
      10, 20, 30, 60, 110, 200, 370, 680, 1250, 2300, 4230, 7780, 14310,
    ]);
  });

  it(`should return the first twenty-one elements of a sequence if n = 21`, () => {
    expect(getTribonacciSequence([1, 1, 1], 21)).toEqual([
      1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201, 2209, 4063, 7473,
      13745, 25281, 46499, 85525,
    ]);
  });

  it(`should return the first thirty-four elements of a sequence if n = 34`, () => {
    expect(getTribonacciSequence([0, 0, 1], 34)).toEqual([
      0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768,
      10609, 19513, 35890, 66012, 121415, 223317, 410744, 755476, 1389537,
      2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096,
    ]);
  });
});
