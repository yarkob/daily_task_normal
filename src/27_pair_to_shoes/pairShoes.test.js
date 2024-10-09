'use strict';

const { pairShoes } = require('./pairShoes');

describe(`Function 'pairShoes':`, () => {
  it(`should be declared`, () => {
    expect(pairShoes).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof pairShoes([])).toBe('boolean');
  });

  it(`should return 'true' for the pair of shoes`, () => {
    const shoes = [
      [0, 23],
      [1, 23],
    ];

    expect(pairShoes(shoes)).toBeTruthy();
  });

  it(`should return 'true' for the pairs of shoes`, () => {
    const shoes = [
      [0, 21],
      [1, 23],
      [1, 21],
      [0, 23],
    ];

    expect(pairShoes(shoes)).toBeTruthy();
  });

  it(`should return 'false' for only one shoe`, () => {
    const shoe = [[0, 19]];

    expect(pairShoes(shoe)).toBeFalsy();
  });

  it(`should return 'false' for two right shoes`, () => {
    const shoes = [
      [1, 23],
      [1, 23],
    ];

    expect(pairShoes(shoes)).toBeFalsy();
  });

  it(`should return 'false' for the shoes with different sizes`, () => {
    const shoe = [
      [0, 19],
      [1, 22],
    ];

    expect(pairShoes(shoe)).toBeFalsy();
  });

  it(`should return 'false' for a set of different shoes`, () => {
    const shoes = [
      [0, 20],
      [1, 21],
      [1, 20],
      [1, 21],
    ];

    expect(pairShoes(shoes)).toBeFalsy();
  });
});
