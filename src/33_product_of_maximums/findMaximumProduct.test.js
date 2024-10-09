'use strict';

const { findMaximumProduct } = require('./findMaximumProduct');

describe(`Function 'findMaximumProduct':`, () => {
  it(`should be declared`, () => {
    expect(findMaximumProduct).toBeInstanceOf(Function);
  });

  it(`should return number`, () => {
    expect(typeof findMaximumProduct([1, 1], 1)).toBe('number');
  });

  it(`should return '1' if size is zero`, () => {
    expect(findMaximumProduct([3, 6, 1], 0)).toEqual(1);
  });

  it(`should return the largest number in the array if size is '1'`, () => {
    expect(findMaximumProduct([8, 2, 11, 3, 12], 1)).toEqual(12);
  });

  it(`should return the product of 2 numbers in the array if size is '2'`, () => {
    expect(findMaximumProduct([9, -3, 0, 1, 2], 2)).toEqual(18);
  });

  it(`should return the product of 10 numbers in the array if size is '10'`, () => {
    expect(
      findMaximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6], 10),
    ).toEqual(60963840);
  });

  it(`should return the product of all numbers if size is equal to the array's length`, () => {
    expect(findMaximumProduct([4, -1, 9, 14, 18, -8, -2], 7)).toEqual(-145152);
  });

  it(`should return the product of all numbers if size is greater than array's length`, () => {
    expect(findMaximumProduct([6, 2, 1, 1, 1, -1, -2, 10, 12], 100)).toEqual(
      2880,
    );
  });

  it(`should return the product of numbers if there are only 3 positive numbers in the array`, () => {
    expect(findMaximumProduct([1, 2, 3], 2)).toEqual(6);
  });

  it(`should return the product of numbers if there are only 3 negative numbers in the array`, () => {
    expect(findMaximumProduct([-2, -3, -4], 2)).toEqual(6);
  });

  it(`should return '0' if there are only 3 zeros in the array`, () => {
    expect(findMaximumProduct([0, 0, 0], 2)).toEqual(0);
  });

  it(`should return the product of numbers if one of the greatest number is '0'`, () => {
    expect(findMaximumProduct([-10, -5, 0, 1], 2)).toEqual(0);
  });
});
