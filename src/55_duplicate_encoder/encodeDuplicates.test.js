'use strict';

const { encodeDuplicates } = require('./encodeDuplicates');

describe(`Function 'encodeDuplicates':`, () => {
  it(`should be declared`, () => {
    expect(encodeDuplicates).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof encodeDuplicates('testing')).toBe('string');
  });

  it(`should return 'x' if the input string consists of one element`, () => {
    expect(encodeDuplicates(',')).toBe('x');
  });

  it(`should return 'x' if the input string is 'y'`, () => {
    expect(encodeDuplicates('y')).toBe('x');
  });

  it(`should replace all characters with 'x' if all of them are unique`, () => {
    expect(encodeDuplicates('Duplicates')).toBe('xxxxxxxxxx');
  });

  it(`should replace duplicates with 'y' if they are at the beginning of the input string`, () => {
    expect(encodeDuplicates('aabcdef')).toBe('yyxxxxx');
  });

  it(`should replace duplicates with 'y' if they are at the end of the input string`, () => {
    expect(encodeDuplicates('abcdefghh')).toBe('xxxxxxxyy');
  });

  it(`should replace duplicates with 'y' if they are not consecutive`, () => {
    expect(encodeDuplicates('checking')).toBe('yxxyxxxx');
  });

  it(`should replace several duplicates`, () => {
    expect(encodeDuplicates('reverse')).toBe('yyxyyxy');
  });

  it(`should ignore case`, () => {
    expect(encodeDuplicates('River')).toBe('yxxxy');
  });

  it(`should return an empty string if the input is empty`, () => {
    expect(encodeDuplicates('')).toBe('');
  });
});
