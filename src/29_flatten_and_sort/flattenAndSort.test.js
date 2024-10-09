'use strict';

const { flattenAndSort } = require('./flattenAndSort');

describe(`Function 'flattenAndSort':`, () => {
  it(`should be declared`, () => {
    expect(flattenAndSort).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = flattenAndSort([3, 7, [2, 1, 0], -3, 6, [8]]);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should work if all elements are in the same sub-array`, () => {
    expect(flattenAndSort([[2, 4, 6, 10, 15, 22, 24]])).toEqual([
      2, 4, 6, 10, 15, 22, 24,
    ]);
  });

  it(`should work if there are two sub-arrays`, () => {
    expect(
      flattenAndSort([
        [3, 9, 5],
        [11, 2, 6],
      ]),
    ).toEqual([2, 3, 5, 6, 9, 11]);
  });

  it(`should work if there are several sub-arrays`, () => {
    expect(
      flattenAndSort([
        [7, 21],
        [3, 9],
        [20, 18, 4],
      ]),
    ).toEqual([3, 4, 7, 9, 18, 20, 21]);
  });

  it(`should work if each element is a separate sub-array`, () => {
    expect(flattenAndSort([[12], [10], [45], [7], [1], [15], [90]])).toEqual([
      1, 7, 10, 12, 15, 45, 90,
    ]);
  });

  it(`should sort a number array in ascending order`, () => {
    expect(flattenAndSort([[80, 23], [40, 39, 38], [25, 13], [46]])).toEqual([
      13, 23, 25, 38, 39, 40, 46, 80,
    ]);
  });

  it(`should work with negative numbers`, () => {
    expect(flattenAndSort([[14, -3, -10], [5], [0, 4, -8], [-24, 31]])).toEqual(
      [-24, -10, -8, -3, 0, 4, 5, 14, 31],
    );
  });

  it(`should work with decimal numbers numbers`, () => {
    expect(
      flattenAndSort([[15.8, 14.7, 15.45, 0.85, 0.9], [4.5, 4.6, 4.3], [0.8]]),
    ).toEqual([0.8, 0.85, 0.9, 4.3, 4.5, 4.6, 14.7, 15.45, 15.8]);
  });

  it(`should work with duplicates`, () => {
    expect(
      flattenAndSort([
        [4, 5, 10],
        [5, 5, 5, 1],
        [10, 11, 3],
      ]),
    ).toEqual([1, 3, 4, 5, 5, 5, 5, 10, 10, 11]);
  });

  it(`should work if one sub-array is empty`, () => {
    expect(flattenAndSort([[-12, 0.3, 2], [], [43, -0.98, 2]])).toEqual([
      -12, -0.98, 0.3, 2, 2, 43,
    ]);
  });

  it(`should work if all sub-arrays are empty`, () => {
    expect(flattenAndSort([[], [], [], []])).toEqual([]);
  });
});
