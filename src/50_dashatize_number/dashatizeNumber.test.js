'use strict';

const { dashatizeNumber } = require('./dashatizeNumber');

describe(`Function 'dashatizeNumber':`, () => {
  it(`should be declared`, () => {
    expect(dashatizeNumber).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof dashatizeNumber(358)).toBe('string');
  });

  it(`should return a string with num without changes if num is a positive one-digit integer`, () => {
    expect(dashatizeNumber(5)).toBe('5');
  });

  it(`should return a string with num without changes if num = 0`, () => {
    expect(dashatizeNumber(0)).toBe('0');
  });

  it(`should return a string with num without a minus if num is a negative one-digit integer`, () => {
    expect(dashatizeNumber(-2)).toBe('2');
  });

  it(`should return a string with num without changes if num is a positive integer and contains only even digits`, () => {
    expect(dashatizeNumber(6264682)).toBe('6264682');
  });

  it(`should return a string with num without a minus if num is a negative integer and contains only even digits`, () => {
    expect(dashatizeNumber(-820284)).toBe('820284');
  });

  it(`should add a dash after the first odd digit`, () => {
    expect(dashatizeNumber(32)).toBe('3-2');
  });

  it(`should add a dash before the last odd digit`, () => {
    expect(dashatizeNumber(47)).toBe('4-7');
  });

  it(`should add one dash between odd digits`, () => {
    expect(dashatizeNumber(35)).toBe('3-5');
  });

  it(`should not add a dash before and after even digits`, () => {
    expect(dashatizeNumber(44673)).toBe('446-7-3');
  });

  it(`should not add a dash before and after zero`, () => {
    expect(dashatizeNumber(51802)).toBe('5-1-802');
  });

  it(`should not add a dash before and after zero`, () => {
    expect(dashatizeNumber(51802)).toBe('5-1-802');
  });

  it(`should work with a long number`, () => {
    expect(dashatizeNumber(304993528346617)).toBe('3-04-9-9-3-5-28-3-466-1-7');
  });

  it(`should return 'NaN' if num = NaN`, () => {
    expect(dashatizeNumber(NaN)).toBe('NaN');
  });

  it(`should return 'NaN' if 'num' is not an integer`, () => {
    expect(dashatizeNumber(2.71)).toBe('NaN');
  });
});
