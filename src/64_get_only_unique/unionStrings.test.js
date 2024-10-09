'use strict';

const { unionStrings } = require('./unionStrings');

describe(`Function 'unionStrings':`, () => {
  it(`should be declared`, () => {
    expect(unionStrings).toBeInstanceOf(Function);
  });

  it(`should return string`, () => {
    expect(typeof unionStrings('', '')).toBe('string');
  });

  it(`should return empty string if both strings are empty`, () => {
    expect(unionStrings('', '')).toEqual('');
  });

  it(`should return sorted string with distinct letters from the second string when the first one is empty`, () => {
    expect(unionStrings('', 'soooorrrteeedddd')).toEqual('deorst');
  });

  it(`should return sorted string with distinct letters when both strings are equal`, () => {
    expect(unionStrings('abbc', 'abbc')).toEqual('abc');
  });

  it(`should return sorted string with distinct letters when both strings length is 1`, () => {
    expect(unionStrings('b', 'a')).toEqual('ab');
  });

  it(`should return sorted string with distinct letters when both strings consist of repeated letters`, () => {
    expect(unionStrings('mmmmmmm', 'aaaaaaa')).toEqual('am');
  });

  it(`should return the concatenated string if the letters are unique`, () => {
    expect(unionStrings('abcd', 'efghijk')).toEqual('abcdefghijk');
  });

  it(`should return sorted string with distinct letters`, () => {
    expect(
      unionStrings('loopingisfunbutdangerous', 'lessdangerousthancoding'),
    ).toEqual('abcdefghilnoprstu');
  });
});
