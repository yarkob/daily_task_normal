'use strict';

const { filterNumbers } = require('./filterNumbers');

describe(`Function 'filterNumbers': `, () => {
  it(`should be declared`, () => {
    expect(filterNumbers).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const objects = [2, 4, 5, -1, (a) => a, 9, 3];
    const nums = [2, 4, 6, 7, 8, 9, 0];
    const result = filterNumbers(objects, nums);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should work if the function is at the beginning of the array`, () => {
    const objects = [(a) => a % 2 === 0, 4, 7, 10, -3];
    const nums = [14, 92, 40, 55, 3, 2, 0, 77];
    const expected = [14, 92, 40, 2, 0];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work if the function is at the end of the array`, () => {
    const objects = [-4, 2, 5, 0, 10, (a) => a > 10];
    const nums = [10, 43, 8, -2, -4, 23, 50, 1234];
    const expected = [43, 23, 50, 1234];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work if the function is in the middle of the array`, () => {
    const objects = [20, 30, 40, (a) => a < 0, 60, 70, 80];
    const nums = [3, 6, -6, 2, -1, -3, -79, 0];
    const expected = [-6, -1, -3, -79];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work if the function is the only element of the array`, () => {
    const objects = [(a) => a > 0 && a < 15];
    const nums = [5, -1, 9, 3, -10, 15, 16, 7];
    const expected = [5, 9, 3, 7];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work if the function matches all elements in the 'arr'`, () => {
    const objects = [3, 6, (a) => a % 5 === 0, 11, 23, -2, 3];
    const nums = [-10, 20, 40, -255, 35, 70, 10, 5];
    const expected = [-10, 20, 40, -255, 35, 70, 10, 5];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work if the function doesn't match any elements in the 'arr'`, () => {
    const objects = [65, (a) => Number.isInteger(Math.sqrt(a)), 6, -23, 4, 9];
    const nums = [8, -33, 5, 6, 10];
    const expected = [];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work with the duplicates in the 'arr'`, () => {
    const objects = [(a) => Number.isInteger(a), 19, 40, 2, -2, 4];
    const nums = [451, 36.6, 90, 451, 0.98, 45, 45];
    const expected = [451, 90, 451, 45, 45];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });

  it(`should work with an empty 'arr'`, () => {
    const objects = [0.4, -5, 9, 89, (a) => a > 2];
    const nums = [];
    const expected = [];

    expect(filterNumbers(objects, nums)).toEqual(expected);
  });
});
