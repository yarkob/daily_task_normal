'use strict';

const { findOdd } = require('./findOdd');

describe(`Function 'findOdd':`, () => {
  it(`should be declared`, () => {
    expect(findOdd).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof findOdd([1])).toBe('number');
  });

  it(`should return the same number if it is the only one in the array`, () => {
    expect(findOdd([2])).toEqual(2);
  });

  it(`should return zero if it is the only one in the array`, () => {
    expect(findOdd([0])).toEqual(0);
  });

  it(`should return positive integer that appears an odd number of times`, () => {
    expect(findOdd([1, 1, 3, 4, 4])).toEqual(3);
  });

  it(`should return negative integer that appears an odd number of times`, () => {
    expect(findOdd([-1, -1, -3, -4, -4])).toEqual(-3);
  });

  it(`should return one integer that appears an odd number of times in the array`, () => {
    expect(findOdd([-20, 2, 2, 3, 3, 5, 5, 4, -20, 4, 5])).toEqual(5);
  });
});
