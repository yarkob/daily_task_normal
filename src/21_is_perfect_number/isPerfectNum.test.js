'use strict';

const { isPerfectNum } = require('./isPerfectNum');

describe(`Function 'isPerfectNum':`, () => {
  it(`should be declared`, () => {
    expect(isPerfectNum).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isPerfectNum(1)).toBe('boolean');
  });

  it(`should return 'true' for a perfect number 6`, () => {
    expect(isPerfectNum(6)).toBeTruthy();
  });

  it(`should return 'true' when 28 is a perfect number`, () => {
    expect(isPerfectNum(28)).toBeTruthy();
  });

  it(`should return 'true' when 496 is a perfect number`, () => {
    expect(isPerfectNum(496)).toBeTruthy();
  });

  it(`should return 'true' when 8128 is a perfect number`, () => {
    expect(isPerfectNum(8128)).toBeTruthy();
  });

  it(`should return 'false' when number is not a perfect number`, () => {
    expect(isPerfectNum(2)).toBeFalsy();
  });

  it(`should return 'false' for all negative numbers`, () => {
    expect(isPerfectNum(-6)).toBeFalsy();
  });

  it(`should return 'false' when number is not passed`, () => {
    expect(isPerfectNum()).toBeFalsy();
  });
});
