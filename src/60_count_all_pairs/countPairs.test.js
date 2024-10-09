'use strict';

const { countPairs } = require('./countPairs');

describe(`Function 'countPairs':`, () => {
  it(`should be declared`, () => {
    expect(countPairs).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countPairs([1, 1])).toBe('number');
  });

  it(`should return a number of pairs`, () => {
    expect(countPairs([1, 1])).toEqual(1);
  });

  it(`should return the number of pairs if there are only two zeros in the array`, () => {
    expect(countPairs([0, 0])).toEqual(1);
  });

  it(`should return zero if original array is empty`, () => {
    expect(countPairs([])).toEqual(0);
  });

  it(`should return zero if original array consists of only one number`, () => {
    expect(countPairs([2])).toEqual(0);
  });

  it(`should return the number of pairs if there are more pairs of a certain number`, () => {
    expect(countPairs([1, 2, 2, 20, 6, 20, 2, 6, 2])).toEqual(4);
  });

  it(`should return zero if there are no pairs of numbers in the array`, () => {
    expect(countPairs([2, 3, 4])).toEqual(0);
  });
});
