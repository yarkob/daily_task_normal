'use strict';

const { findDuplicates } = require('./findDuplicates');

describe(`Function 'findDuplicates':`, () => {
  it(`should be declared`, () => {
    expect(findDuplicates).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(findDuplicates([])).toBeInstanceOf(Array);
  });

  it(`should return an array of duplicates if there are duplicates in the original array`, () => {
    expect(findDuplicates([1, 2, 1, 2, 3])).toEqual([1, 2]);
  });

  it(`should return an array of negative duplicates if there are negative duplicates in the original array`, () => {
    expect(findDuplicates([-2, -1, -5, -5, -5, -1])).toEqual([-5, -1]);
  });

  it(`should return an array of zero if original array consists of zeros`, () => {
    expect(findDuplicates([0, 0, 0])).toEqual([0]);
  });

  it(`should return an empty array if there are no duplicates in the original array`, () => {
    expect(findDuplicates([1, 2, 3, 4, 5, 6])).toEqual([]);
  });
});
