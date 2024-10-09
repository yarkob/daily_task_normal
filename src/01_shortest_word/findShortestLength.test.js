'use strict';

const { findShortestLength } = require('./findShortestLength');

describe(`Function 'findShortestLength':`, () => {
  it(`should be declared`, () => {
    expect(findShortestLength).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof findShortestLength('Find the shortest word')).toBe('number');
  });

  it(`should work with the input of one word`, () => {
    expect(findShortestLength('A')).toBe(1);
  });

  it(`should work with the input of several words`, () => {
    expect(findShortestLength('Never gonna give you up')).toBe(2);
  });

  it(`should work with two shortest words in the input`, () => {
    expect(findShortestLength('The show must go on')).toBe(2);
  });

  it(`should work with the input with words of equal length`, () => {
    expect(findShortestLength('Cats love body heat')).toBe(4);
  });

  it(`should work with the input with special characters only`, () => {
    expect(findShortestLength('#@ )₴?$')).toBe(2);
  });

  it(`should work with the input with numbers only`, () => {
    expect(findShortestLength('45 1 74444')).toBe(1);
  });

  it(`should work with the input with numbers and special characters`, () => {
    expect(findShortestLength('R2-D2 Second Generation')).toBe(5);
  });

  it(`should return 0 if the input is an empty string`, () => {
    expect(findShortestLength('')).toBe(0);
  });

  it(`should return 0 if the input contains several spaces in a row`, () => {
    expect(findShortestLength('hi     ')).toBe(0);
  });

  it(`should return 0 if the input contains a space at the beginning`, () => {
    expect(findShortestLength(' There is a space at the beginning')).toBe(0);
  });
});
