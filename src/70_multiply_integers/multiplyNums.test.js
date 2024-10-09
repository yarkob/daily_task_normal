'use strict';

const { multiplyNums } = require('./multiplyNums');

describe(`Function 'multiplyNums':`, () => {
  it(`should be declared`, () => {
    expect(multiplyNums).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof multiplyNums([1, 1, 1, 2, 2, 3])).toBe('number');
  });

  it(`should return the multiplication of numbers that appear once and twice in format 'x * x * y'`, () => {
    expect(multiplyNums([1, 1, 1, 2, 2, 3])).toEqual(18);
  });

  it(`should return the multiplication of numbers that appear once and twice in format 'x * x * y' in the big array`, () => {
    expect(
      multiplyNums([
        60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26,
        17, 17, 26, 53, 98, 53,
      ]),
    ).toEqual(249704);
  });

  it(`should return 1 if original array is empty`, () => {
    expect(multiplyNums([])).toEqual(1);
  });

  it(`should not return the multiplication of numbers that appear once and twice in format 'x * y * y'`, () => {
    expect(multiplyNums([2, 2, 2, 3, 3, 5])).not.toEqual(45);
  });
});
