'use strict';

const { isLeapYear } = require('./isLeapYear');

describe(`Function 'isLeapYear':`, () => {
  it(`should be declared`, () => {
    expect(isLeapYear).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isLeapYear(1998)).toBe('boolean');
  });

  it(`should work for a year which is divisible by 4`, () => {
    expect(isLeapYear(1844)).toBe(true);
  });

  it(`should work for a year which is divisible by 100`, () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  it(`should work for a year which is divisible by 400`, () => {
    expect(isLeapYear(1600)).toBe(true);
  });

  it(`should work for an odd year`, () => {
    expect(isLeapYear(2021)).toBe(false);
  });

  it(`should work for an even year which is not divisible by 4`, () => {
    expect(isLeapYear(1794)).toBe(false);
  });
});
