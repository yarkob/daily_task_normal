'use strict';

const { getLastColor } = require('./getLastColor');

describe(`Function 'getLastColor':`, () => {
  it(`should be declared`, () => {
    expect(getLastColor).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof getLastColor('GBBGRB')).toBe('string');
  });

  it(`should work for an input of single character`, () => {
    expect(getLastColor('G')).toBe('G');
  });

  it(`should work for an input of two characters with same colors`, () => {
    expect(getLastColor('RR')).toBe('R');
  });

  it(`should work for an input of two characters with different colors`, () => {
    expect(getLastColor('RG')).toBe('B');
  });

  it(`should work for an input of three characters with different colors`, () => {
    expect(getLastColor('RGB')).toBe('G');
  });

  it(`should work for an input of multiple characters with same colors`, () => {
    expect(getLastColor('RRRRRRRRRR')).toBe('R');
  });

  it(`should work for an input of multiple characters with different colors`, () => {
    expect(getLastColor('RGRRGGRBGBB')).toBe('B');
  });
});
