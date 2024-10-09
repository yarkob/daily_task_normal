'use strict';

const { makeDescOrder } = require('./makeDescOrder');

describe(`Function 'makeDescOrder':`, () => {
  it(`should be declared`, () => {
    expect(makeDescOrder).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof makeDescOrder(123)).toBe('number');
  });

  it(`should return the same number for single digit input`, () => {
    expect(makeDescOrder(7)).toEqual(7);
  });

  it(`should return the same number for numbers containing the same digit multiple times`, () => {
    expect(makeDescOrder(6666666)).toEqual(6666666);
  });

  it(`should return zero for zero`, () => {
    expect(makeDescOrder(0)).toEqual(0);
  });

  it(`should return digits in descending order for two digits number`, () => {
    expect(makeDescOrder(29)).toEqual(92);
  });

  it(`should return digits in descending order if digits are repeated`, () => {
    expect(makeDescOrder(5527946881)).toEqual(9887655421);
  });
});
