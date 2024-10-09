'use strict';

const { isSuperset, isSubset } = require('./subsetAndSuperset');

describe('', () => {
  it(`Function 'isSubset' should be declared`, () => {
    expect(isSubset).toBeInstanceOf(Function);
  });

  it(`Function 'isSubset' should return a boolean value`, () => {
    const A = new Set([1, 2, 3]);
    const B = new Set([1, 2, 3]);

    expect(typeof isSubset(A, B)).toBe('boolean');
  });

  it(`Function 'isSubset' should return true if all elements of the subset are present in the superset`, () => {
    const A = new Set([1, 2, 3]);
    const B = new Set([1, 2, 3, 4, 5]);

    expect(isSubset(A, B)).toBe(true);
  });

  it(`Function 'isSubset' should return false if some elements of the subset are not present in the superset`, () => {
    const A = new Set(['a', 'b', 'c']);
    const B = new Set(['a', 'b', 'd', 'e', 'f']);

    expect(isSubset(A, B)).toBe(false);
  });

  it(`Function 'isSubset' should return false if no elements of the subset are present in the superset`, () => {
    const A = new Set(['a', 'b', 'c']);
    const B = new Set(['x', 'y', 'z']);

    expect(isSubset(A, B)).toBe(false);
  });

  it(`Function 'isSubset' should return true if the subset and the superset are equal`, () => {
    const A = new Set([1, 'qwe', false]);
    const B = new Set([1, 'qwe', false]);

    expect(isSubset(A, B)).toBe(true);
  });

  it(`Function 'isSubset' should return true if all elements of the subset are present in the superset but not in the same order`, () => {
    const A = new Set([12, -3, 10, 4]);
    const B = new Set([8, 10, 22, 12, 5, 4, 0, -3]);

    expect(isSubset(A, B)).toBe(true);
  });

  it(`Function 'isSubset' should return true if the subset is empty and the superset is not`, () => {
    const A = new Set([]);
    const B = new Set([-1, 0, 1]);

    expect(isSubset(A, B)).toBe(true);
  });

  it(`Function 'isSubset' should return false if the subset is not empty and the superset is`, () => {
    const A = new Set(['hello', 'world']);
    const B = new Set([]);

    expect(isSubset(A, B)).toBe(false);
  });

  it(`Function 'isSubset' should return true if both subset and superset are empty`, () => {
    const A = new Set([]);
    const B = new Set([]);

    expect(isSubset(A, B)).toBe(true);
  });

  it(`Function 'isSuperset' should be declared`, () => {
    expect(isSuperset).toBeInstanceOf(Function);
  });

  it(`Function 'isSuperset' should return a boolean value`, () => {
    const A = new Set([1, 2, 3]);
    const B = new Set([1, 2, 3]);

    expect(typeof isSuperset(A, B)).toBe('boolean');
  });

  it(`Function 'isSuperset' should return true if the superset contains all elements of the subset`, () => {
    const A = new Set([6, 7, 8, 9, 10]);
    const B = new Set([6, 7, 8]);

    expect(isSuperset(A, B)).toBe(true);
  });

  it(`Function 'isSuperset' should return false if the superset doesn't contain some elements of the subset`, () => {
    const A = new Set(['m', 'n', 'o', 'p']);
    const B = new Set(['o', 'p', 'q', 'r']);

    expect(isSuperset(A, B)).toBe(false);
  });

  it(`Function 'isSuperset' should return false if the superset doesn't contain any elements of the subset`, () => {
    const A = new Set(['g', 'h', 'i', 'j']);
    const B = new Set(['k', 'l']);

    expect(isSuperset(A, B)).toBe(false);
  });

  it(`Function 'isSuperset' should return true if subset and superset are equal`, () => {
    const A = new Set([2, true, 'dfg']);
    const B = new Set([2, true, 'dfg']);

    expect(isSuperset(A, B)).toBe(true);
  });

  it(`Function 'isSuperset' should return true if the superset contains all elements of the subset but not in the same order`, () => {
    const A = new Set([4, 6, 8, 10, 12, 14]);
    const B = new Set([10, 8, 12]);

    expect(isSuperset(A, B)).toBe(true);
  });

  it(`Function 'isSuperset' should return true if superset is not empty and subset is`, () => {
    const A = new Set(['not', 'empty']);
    const B = new Set([]);

    expect(isSuperset(A, B)).toBe(true);
  });

  it(`Function 'isSuperset' should return false if superset is empty and subset is not`, () => {
    const A = new Set([]);
    const B = new Set([4, 12, -9]);

    expect(isSuperset(A, B)).toBe(false);
  });

  it(`Function 'isSuperset' should return true if both superset and subset are empty`, () => {
    const A = new Set([]);
    const B = new Set([]);

    expect(isSuperset(A, B)).toBe(true);
  });
});
