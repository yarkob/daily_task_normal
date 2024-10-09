'use strict';

const { findStray } = require('./findStray');

describe(`Function 'findStray':`, () => {
  it(`should return a number`, () => {
    expect(typeof findStray([3, 5, 5])).toBe('number');
  });

  it(`should work if the stray number is at the beginning of the array`, () => {
    expect(findStray([6, 8, 8, 8])).toBe(6);
  });

  it(`should work if the stray number is at the end of the array`, () => {
    expect(findStray([11, 11, 11, 11, 1])).toBe(1);
  });

  it(`should work if the stray number is in the middle of the array`, () => {
    expect(findStray([9, 9, 9, 13, 9, 9])).toBe(13);
  });

  it(`should work with negative numbers`, () => {
    expect(findStray([-2, -2, -2, -2, -7, -2])).toBe(-7);
  });

  it(`should work with both positive and negative numbers`, () => {
    expect(findStray([-4, -4, 4, -4, -4, -4, -4, -4])).toBe(4);
  });

  it(`should work with zero`, () => {
    expect(findStray([5, 0, 0, 0, 0, 0, 0])).toBe(5);
  });

  it(`should work with decimal numbers`, () => {
    expect(findStray([7.7, 7.7, 7.7, 7.7, 7.7, 7.7, 7.5])).toBe(7.5);
  });
});
