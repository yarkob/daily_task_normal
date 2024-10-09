'use strict';

const { sumInRow } = require('./sumInRow');

describe(`Function 'sumInRow':`, () => {
  it(`should be declared`, () => {
    expect(sumInRow).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof sumInRow(1)).toBe('number');
  });

  it(`should return the sum for the first row`, () => {
    expect(sumInRow(1)).toEqual(1);
  });

  it(`should return the sum for the second row`, () => {
    expect(sumInRow(2)).toEqual(8);
  });

  it(`should return the sum for the 42 row`, () => {
    expect(sumInRow(42)).toEqual(74088);
  });

  it(`should return the sum for the 100 row`, () => {
    expect(sumInRow(100)).toEqual(1000000);
  });

  it(`should return zero if the number of row is not passed`, () => {
    expect(sumInRow()).toEqual(0);
  });

  it(`should return zero for all negative numbers`, () => {
    expect(sumInRow(-4)).toEqual(0);
  });
});
