'use strict';

const { reverseChars } = require('./reverseChars');

describe(`Function 'reverseChars':`, () => {
  it(`should be declared`, () => {
    expect(reverseChars).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof reverseChars('asdfghjk', 3)).toBe('string');
  });

  it(`should not change the input string if string length = 1`, () => {
    expect(reverseChars('l', 6)).toBe('l');
  });

  it(`should not reverse characters if k = 1`, () => {
    expect(reverseChars('dontreverse', 1)).toBe('dontreverse');
  });

  it(`should reverse every other pair of characters if k = 2`, () => {
    expect(reverseChars('veeroythrepari', 2)).toBe('everyotherpair');
  });

  it(`should reverse every other triple of characters if k = 3`, () => {
    expect(reverseChars('rtsingroteveesr', 3)).toBe('stringtoreverse');
  });

  it(`should reverse the whole string if string length = k`, () => {
    expect(reverseChars('llaesrever', 10)).toBe('reverseall');
  });

  it(`should reverse the whole string if string length is less than k`, () => {
    expect(reverseChars('gnirtsllams', 15)).toBe('smallstring');
  });

  it(`should reverse the first half of characters if string length is 2k`, () => {
    expect(reverseChars('lnoesreveryfirsthalf', 10)).toBe(
      'reverseonlyfirsthalf',
    );
  });

  it(`should reverse all characters at the end of the string if there are fewer than k characters left`, () => {
    expect(reverseChars('qwertyuiopasdfghjkl', 4)).toBe('rewqtyuisapodfghlkj');
  });

  it(`should reverse only k characters at the end of the string if there are less than 2k but more than k characters left`, () => {
    expect(reverseChars('nodtrerevsetsihtoteehnd', 3)).toBe(
      'dontreversethistotheend',
    );
  });

  it(`should return an empty string if input is an empty string`, () => {
    expect(reverseChars('', 2)).toBe('');
  });
});
