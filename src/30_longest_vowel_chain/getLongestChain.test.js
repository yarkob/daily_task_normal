'use strict';

const { getLongestChain } = require('./getLongestChain');

describe(`Function 'getLongestChain':`, () => {
  it(`should be declared`, () => {
    expect(getLongestChain).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof getLongestChain('chain')).toBe('number');
  });

  it(`should work if the word contains one vowel`, () => {
    expect(getLongestChain('get')).toBe(1);
  });

  it(`should work if the word contains two vowels, but not in a chain`, () => {
    expect(getLongestChain('vowel')).toBe(1);
  });

  it(`should work if the word contains a chain of 2 vowels`, () => {
    expect(getLongestChain('book')).toBe(2);
  });

  it(`should choose the longest vowel chain if a word contains several chains`, () => {
    expect(getLongestChain('mypreeeciouuus')).toBe(5);
  });

  it(`should not consider 'y' as a vowel`, () => {
    expect(getLongestChain('eyes')).toBe(1);
  });

  it(`should work if the word contains vowels only`, () => {
    expect(getLongestChain('ieaiaio')).toBe(7);
  });

  it(`should work if the word contains consonants only`, () => {
    expect(getLongestChain('src')).toBe(0);
  });

  it(`should work with an empty string`, () => {
    expect(getLongestChain('')).toBe(0);
  });
});
