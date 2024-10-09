'use strict';

const { calculateYears } = require('./calculateYears');

describe(`Function 'calculateYears':`, () => {
  it(`should be declared`, () => {
    expect(calculateYears).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof calculateYears(0, 0, 0, 0)).toBe('number');
  });

  it(`should return the number of years when desired principal is greater than the initial principal`, () => {
    expect(calculateYears(1000, 0.05, 0.18, 1100)).toEqual(3);
  });

  it(`should return the number of years when the interest rate is 0.01625`, () => {
    expect(calculateYears(1000, 0.01625, 0.18, 1200)).toEqual(14);
  });

  it(`should return the number of years when interest rate and tax rate are tiny`, () => {
    expect(calculateYears(1500, 0.001, 0.001, 2000)).toEqual(289);
  });

  it(`should return zero when desired principal is equal to the initial principal`, () => {
    expect(calculateYears(1000, 0.05, 0.18, 1000)).toEqual(0);
  });

  it(`should return zero when initial principal is greater than the desired principal`, () => {
    expect(calculateYears(1500, 0.05, 0.18, 0)).toEqual(0);
  });

  it(`should return zero if arguments are not passed`, () => {
    expect(calculateYears()).toEqual(0);
  });

  it(`should return zero if at least one parameter is negative`, () => {
    expect(calculateYears(900, 0.5, 0.2, -1000)).toEqual(0);
  });
});
