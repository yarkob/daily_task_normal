'use strict';

const { removeOddOccurences } = require('./removeOddOccurences');

describe(`Function 'removeOddOccurences':`, () => {
  it(`should be declared`, () => {
    expect(removeOddOccurences).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = removeOddOccurences([4, 5, 5, 5, 4]);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should remove all numbers that repeat an odd number of times`, () => {
    expect(removeOddOccurences([2, 6, 1, 2, 9, 2, 2, 1, 1, 9])).toEqual([
      2, 2, 9, 2, 2, 9,
    ]);
  });

  it(`should return an empty array if the initital array contains only one element`, () => {
    expect(removeOddOccurences([15])).toEqual([]);
  });

  it(`should return an empty array if the initital array contains two different elements`, () => {
    expect(removeOddOccurences([2, 4])).toEqual([]);
  });

  it(`should return the initial array the initital array contains two equal elements`, () => {
    expect(removeOddOccurences([5, 5])).toEqual([5, 5]);
  });

  it(`should return an empty array if all numbers repeat an odd number of times`, () => {
    expect(removeOddOccurences([4, 7, 4, 7, 4, 7, 8, 8, 8])).toEqual([]);
  });

  it(`should return the initial array if all numbers repeat an even number of times`, () => {
    expect(removeOddOccurences([3, 3, 5, 5, 7, 7, 2, 1, 2, 1])).toEqual([
      3, 3, 5, 5, 7, 7, 2, 1, 2, 1,
    ]);
  });

  it(`should work with decimal numbers`, () => {
    expect(
      removeOddOccurences([3.4, 3.4, 1.2, 5.8, 3.6, 3.6, 1.2, 1.2]),
    ).toEqual([3.4, 3.4, 3.6, 3.6]);
  });

  it(`should work with negative numbers`, () => {
    expect(
      removeOddOccurences([0, 2, -3, 0, -3, -3, 4.5, -3, -8.6, 13, -8.6]),
    ).toEqual([0, -3, 0, -3, -3, -3, -8.6, -8.6]);
  });

  it(`should return an empty array if the initial array is empty`, () => {
    expect(removeOddOccurences([])).toEqual([]);
  });
});
