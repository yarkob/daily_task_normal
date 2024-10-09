'use strict';

const { findAnagrams } = require('./findAnagrams');

describe(`Function 'findAnagrams':`, () => {
  it(`should be declared`, () => {
    expect(findAnagrams).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(findAnagrams('', [''])).toBeInstanceOf(Array);
  });

  it(`should return an array of all the anagrams`, () => {
    expect(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual([
      'aabb',
      'bbaa',
    ]);
  });

  it(`should return an array of anagrams when given array consists of strings with different length`, () => {
    expect(
      findAnagrams('north', ['northest', 'nor', 'nordic', 'throw', 'ornth']),
    ).toEqual(['ornth']);
  });

  it(`should return an array with anagram when given word is the only present in the array`, () => {
    expect(findAnagrams('mate', ['mate'])).toEqual(['mate']);
  });

  it(`should return an empty array when there are no anagrams`, () => {
    expect(findAnagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([]);
  });

  it(`should return an array with empty string when the word is empty and array of words consists of empty string`, () => {
    expect(findAnagrams('', [''])).toEqual(['']);
  });
});
