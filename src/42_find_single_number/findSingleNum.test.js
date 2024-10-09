'use strict';

const { findSingleNum } = require('./findSingleNum');

describe('findSingleNum', () => {
  it('should be declared', () => {
    expect(findSingleNum).toBeInstanceOf(Function);
  });

  it('should return a number', () => {
    expect(typeof findSingleNum([1, 2, 2])).toBe('number');
  });

  it('should return the only number in the array', () => {
    expect(findSingleNum([2])).toEqual(2);
  });

  it('should return zero if the array consists of zero', () => {
    expect(findSingleNum([0])).toEqual(0);
  });

  it('should return a number from the array that is not repeated', () => {
    expect(findSingleNum([4, 3, 8, 3, 8])).toEqual(4);
  });

  it('should return a negative unique number', () => {
    expect(findSingleNum([-3, -2, -6, -4, -2, -6, -3])).toEqual(-4);
  });

  it('should return a number from the big array that is not repeated', () => {
    expect(findSingleNum([4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10])).toEqual(10);
  });
});
