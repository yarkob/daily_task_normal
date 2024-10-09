'use strict';

const { generateSequence } = require('./generateSequence');

describe(`Function 'generateSequence':`, () => {
  it(`should be declared`, () => {
    expect(generateSequence).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(generateSequence(4, 10)).toBeInstanceOf(Array);
  });

  it(`should repeat pattern once if num = 1 and pattern is not a function`, () => {
    expect(generateSequence(1, '')).toEqual(['']);
  });

  it(`should repeat pattern num times if pattern is a number`, () => {
    expect(generateSequence(4, 2)).toEqual([2, 2, 2, 2]);
  });

  it(`should repeat pattern num times if pattern is a string`, () => {
    expect(generateSequence(3, 'asd')).toEqual(['asd', 'asd', 'asd']);
  });

  it(`should repeat pattern num times if pattern is a boolean`, () => {
    expect(generateSequence(5, false)).toEqual([
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  it(`should repeat pattern num times if pattern is an array`, () => {
    expect(generateSequence(6, [2, 'two'])).toEqual([
      [2, 'two'],
      [2, 'two'],
      [2, 'two'],
      [2, 'two'],
      [2, 'two'],
      [2, 'two'],
    ]);
  });

  it(`should return a sequence created according to the callback if pattern is a function with an index`, () => {
    expect(generateSequence(5, (idx) => idx + 3)).toEqual([3, 4, 5, 6, 7]);
  });

  it(`should return an array with the first element of a sequence if num = 1 and pattern is a function`, () => {
    expect(generateSequence(1, (idx) => idx - 1)).toEqual([-1]);
  });

  it(`should return an array of undefined if pattern is not passed`, () => {
    expect(generateSequence(2)).toEqual([undefined, undefined]);
  });

  it(`should return an empty array if num = 0`, () => {
    expect(generateSequence(0, 9)).toEqual([]);
  });
});
