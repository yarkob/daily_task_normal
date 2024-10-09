'use strict';

const { maxAndMin } = require('./maxAndMin');

describe(`Function 'maxAndMin':`, () => {
  it(`should be declared`, () => {
    expect(maxAndMin).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof maxAndMin('45 9 4')).toBe('string');
  });

  it(`should work with a string containing only one number`, () => {
    expect(maxAndMin('8')).toBe('8 8');
  });

  it(`should work for a string with 2 different positive numbers`, () => {
    expect(maxAndMin('21 67')).toBe('67 21');
  });

  it(`should work for a string containing only negative numbers`, () => {
    expect(maxAndMin('-44 -5 -90 -2 -175 -24')).toBe('-2 -175');
  });

  it(`should work for a string containing negative and positive numbers`, () => {
    expect(maxAndMin('-45 22 60 2 -34')).toBe('60 -45');
  });

  it(`should work with a string containing equal numbers`, () => {
    expect(maxAndMin('5 5 5 5')).toBe('5 5');
  });

  it(`should work with a string containing a zero`, () => {
    expect(maxAndMin('8 0 7 10')).toBe('10 0');
  });

  it(`should work for a string containing two spaces in a row`, () => {
    expect(maxAndMin('-4 21 145   90 -7')).toBe('145 -7');
  });

  it(`should work for a string containing several spaces in a row and only positive integers`, () => {
    expect(maxAndMin('1      2')).toBe('2 1');
  });

  it(`should work for a string containing spaces at the beginning and at the end`, () => {
    expect(maxAndMin('   31 2 80 255 11   ')).toBe('255 2');
  });
});
