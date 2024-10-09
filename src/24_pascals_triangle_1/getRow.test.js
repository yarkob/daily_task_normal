'use strict';

const { getRow } = require('./getRow');

describe(`Function 'getRow':`, () => {
  it(`should be declared`, () => {
    expect(getRow).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getRow(13)).toBeInstanceOf(Array);
  });

  it(`should return a correct row if rowIndex = 0`, () => {
    expect(getRow(0)).toEqual([1]);
  });

  it(`should return a correct row if rowIndex = 1`, () => {
    expect(getRow(1)).toEqual([1, 1]);
  });

  it(`should return a correct row if rowIndex = 2`, () => {
    expect(getRow(2)).toEqual([1, 2, 1]);
  });

  it(`should return a correct row if rowIndex = 3`, () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  it(`should return a correct row if rowIndex = 4`, () => {
    expect(getRow(4)).toEqual([1, 4, 6, 4, 1]);
  });

  it(`should return a correct row if rowIndex = 5`, () => {
    expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it(`should return a correct row if rowIndex = 10`, () => {
    expect(getRow(10)).toEqual([1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]);
  });

  it(`should return a correct row if rowIndex = 13`, () => {
    expect(getRow(13)).toEqual([
      1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1,
    ]);
  });
});
