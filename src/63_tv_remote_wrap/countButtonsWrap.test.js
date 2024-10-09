'use strict';

const { countButtonsWrap } = require('./countButtonsWrap');

describe(`Function 'countButtonsWrap':`, () => {
  it(`should be declared`, () => {
    expect(countButtonsWrap).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countButtonsWrap('Javascript')).toBe('number');
  });

  it(`should return 1 if words = 'a'`, () => {
    expect(countButtonsWrap('a')).toBe(1);
  });

  it(`should return 5 if words = 'AA'`, () => {
    expect(countButtonsWrap('AA')).toBe(5);
  });

  it(`should return 43 if words = 'lowercase'`, () => {
    expect(countButtonsWrap('lowercase')).toBe(43);
  });

  it(`should return 40 if words = 'UPPERCASE'`, () => {
    expect(countButtonsWrap('UPPERCASE')).toBe(40);
  });

  it(`should return 74 if words = 'mIXedCaSes'`, () => {
    expect(countButtonsWrap('mIXedCaSes')).toBe(74);
  });

  it(`should return 62 if words = 'Mate Academy'`, () => {
    expect(countButtonsWrap('Mate Academy')).toBe(62);
  });

  it(`should return 97 if words = 'words_with_underscore'`, () => {
    expect(countButtonsWrap('words_with_underscore')).toBe(97);
  });

  it(`should return 93 if words = 'w0rd5 w1th num6er5'`, () => {
    expect(countButtonsWrap('w0rd5 w1th num6er5')).toBe(93);
  });

  it(`should return 107 if words = 'Type 1 full sentence.'`, () => {
    expect(countButtonsWrap('Type 1 full sentence.')).toBe(107);
  });

  it(`should return 7 if words consist of 5 spaces`, () => {
    expect(countButtonsWrap('     ')).toBe(7);
  });
});
