'use strict';

const { mergeArrays } = require('./mergeArrays');

describe(`Function 'mergeArrays':`, () => {
  it(`should be declared`, () => {
    expect(mergeArrays).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(mergeArrays(['a'], [1])).toBeInstanceOf(Array);
  });

  it(`should return merged array where its first element is the first element from the first array`, () => {
    const arr1 = ['a', 'b'];
    const arr2 = [1, 2];
    const result = mergeArrays(arr1, arr2);

    expect(result[0]).toEqual('a');
  });

  it(`should return merged array if arrays' lengths are equal`, () => {
    expect(mergeArrays(['a', 'b'], [1, 2])).toEqual(['a', 1, 'b', 2]);
  });

  it(`should return merged array if length of the first array is bigger than second`, () => {
    expect(mergeArrays(['a', 'b', 'c'], [1])).toEqual(['a', 1, 'b', 'c']);
  });

  it(`should return merged array if length of the second array is bigger than first`, () => {
    expect(mergeArrays(['a'], [1, 2, 3])).toEqual(['a', 1, 2, 3]);
  });
});
