'use strict';

const { getPair } = require('./getPair');

describe(`Function 'getPair':`, () => {
  it(`should be declared`, () => {
    expect(getPair).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getPair([2, 5, 4, 3], 9)).toBeInstanceOf(Array);
  });

  it(`should return an array equal to 'nums' if 'nums' consists of two integers which add up to the 'sum'`, () => {
    expect(getPair([1, 2], 3)).toEqual([1, 2]);
  });

  it(`should return a pair of integers which add up to the 'sum' if they are at the beginning of the array`, () => {
    expect(getPair([2, 4, 3, 12, 45], 6)).toEqual([2, 4]);
  });

  it(`should return a pair of integers which add up to the 'sum' if they are in the middle of the array`, () => {
    expect(getPair([19, 2, 23, 40, 5, 17], 63)).toEqual([23, 40]);
  });

  it(`should return a pair of integers which add up to the 'sum' if they are at the end of the array`, () => {
    expect(getPair([11, 12, 13, 14, 15, 16, 17, 18], 35)).toEqual([17, 18]);
  });

  it(`should return a pair of integers which add up to the 'sum' if they are not consecutive elements of the array`, () => {
    expect(getPair([11, 12, 13, 14, 15, 16, 17, 18], 35)).toEqual([17, 18]);
  });

  it(`should return a pair of integers which add up to the 'sum' if they are duplicates`, () => {
    expect(getPair([1, 2, 5, 7, 2, 11], 4)).toEqual([2, 2]);
  });

  it(`should return the first pair of integers which add up to the 'sum' if there are several pairs`, () => {
    expect(getPair([3, 12, 2, 6, 5, 8, 4, 10], 7)).toEqual([2, 5]);
  });

  it(`should work with negative integers`, () => {
    expect(getPair([-2, -16, -9, -3, -5, -4, -11, -1, -3], -6)).toEqual([
      -2, -4,
    ]);
  });

  it(`should work both positive and negative integers`, () => {
    expect(getPair([10, 15, 2, 1, -4, 4, 12, -7, -23], 8)).toEqual([-4, 12]);
  });

  it(`should return 'undefined' if there is no pair of integers that add up to the 'sum'`, () => {
    expect(getPair([-3, 18, 4, 10, -35, 5, 100, 2], 21)).toEqual(undefined);
  });
});
