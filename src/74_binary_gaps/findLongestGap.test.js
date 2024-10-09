'use strict';

const { findLongestGap } = require('./findLongestGap');

describe(`Function 'findLongestGap':`, () => {
  it(`should be declared`, () => {
    expect(findLongestGap).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof findLongestGap(20)).toBe('number');
  });

  it(`should return 1 if the only binary gap of the number has the length 1`, () => {
    expect(findLongestGap(5)).toBe(1);
  });

  it(`should return 1 if there are several binary gaps that have the length 1`, () => {
    expect(findLongestGap(85)).toBe(1);
  });

  it(`should return 2 if the only binary gap of the number has the length 2`, () => {
    expect(findLongestGap(9)).toBe(2);
  });

  it(`should return 2 if the longest binary gap of the number has the length 2`, () => {
    expect(findLongestGap(101)).toBe(2);
  });

  it(`should return 3 if the only binary gap of the number has the length 3`, () => {
    expect(findLongestGap(35)).toBe(3);
  });

  it(`should return 3 if the longest binary gap of the number has the length 3`, () => {
    expect(findLongestGap(145)).toBe(3);
  });

  it(`should return 4 if the longest binary gap of the number has the length 4`, () => {
    expect(findLongestGap(529)).toBe(4);
  });

  it(`should work with a large number`, () => {
    expect(findLongestGap(3957309570937014328312)).toBe(7);
  });

  it(`should return 0 if num = 0`, () => {
    expect(findLongestGap(0)).toBe(0);
  });

  it(`should return 0 if binary representation doesn't contain zeroes`, () => {
    expect(findLongestGap(7)).toBe(0);
  });

  it(`should return 0 if binary representation contains zeroes only at the end of the number`, () => {
    expect(findLongestGap(56)).toBe(0);
  });

  it(`should return the length of the longest binary gap if binary representation contains zeroes at the end of the number`, () => {
    expect(findLongestGap(144)).toBe(2);
  });
});
