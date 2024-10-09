'use strict';

const { getTofu } = require('./getTofu');

describe(`Function 'getTofu':`, () => {
  it(`should be declared`, () => {
    expect(getTofu).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getTofu(122, 'monme mon mon monme')).toBeInstanceOf(Array);
  });

  it(`should return a string when the cost of tofu is higher than the total amount of money`, () => {
    expect(typeof getTofu(674, 'mon mon mon')).toBe('string');
  });

  it(`should return a string when there is no correct change`, () => {
    expect(typeof getTofu(5, 'mon monme')).toBe('string');
  });

  it(`should return an array containing count of mon coins in box, count of monme coins in box, sum of all coins value in box and minimum number of coins needed for tofu`, () => {
    const box =
      'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';

    expect(getTofu(124, box)).toEqual([45, 5, 345, 6]);
  });

  it(`should return an array when there is a correct change`, () => {
    expect(getTofu(1, 'monme mon mon monme')).toEqual([2, 2, 122, 1]);
  });

  it(`should return 'leaving the market' when the cost of tofu is higher than the total amount of money`, () => {
    expect(getTofu(674, 'mon mon mon')).toEqual('leaving the market');
  });

  it(`should return 'leaving the market' when there is no correct change`, () => {
    expect(getTofu(5, 'mon monme')).toEqual('leaving the market');
  });
});
