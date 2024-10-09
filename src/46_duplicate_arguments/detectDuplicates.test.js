'use strict';

const { detectDuplicates } = require('./detectDuplicates');

describe(`Function 'detectDuplicates:`, () => {
  it(`should be declared`, () => {
    expect(detectDuplicates).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof detectDuplicates(1, 2, 3)).toBe('boolean');
  });

  it(`should return true if there are duplicate arguments`, () => {
    expect(detectDuplicates(1, 3, 5, 7, 9, 1)).toBe(true);
  });

  it(`should return false if there are no duplicate arguments`, () => {
    expect(detectDuplicates('q', 's', 't')).toBe(false);
  });

  it(`should return false if a single argument is passed`, () => {
    expect(detectDuplicates('one')).toBe(false);
  });

  it(`should work with numbers`, () => {
    expect(detectDuplicates(1, 3, 2.2, 5, 9, 2.2, 4)).toBe(true);
  });

  it(`should work with strings`, () => {
    expect(detectDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });

  it(`should work with booleans`, () => {
    expect(detectDuplicates(true, false)).toBe(false);
  });

  it(`should work with null`, () => {
    expect(detectDuplicates(null, null)).toBe(true);
  });

  it(`should work with undefined`, () => {
    expect(detectDuplicates(undefined, undefined)).toBe(true);
  });

  it(`should work with different truthy values`, () => {
    expect(detectDuplicates(1, 'qwe', 59, -3, '-', true)).toBe(false);
  });

  it(`should work with different falsy values`, () => {
    expect(detectDuplicates(false, null, '', undefined, 0)).toBe(false);
  });

  it(`should work with numbers and number strings`, () => {
    expect(detectDuplicates(1, 2, 3, '1', '2', '3')).toBe(false);
  });

  it(`should work with null as a value and as a string`, () => {
    expect(detectDuplicates('null', null)).toBe(false);
  });

  it(`should work with undefined as a value and as a string`, () => {
    expect(detectDuplicates(undefined, 'undefined')).toBe(false);
  });

  it(`should return false if no arguments are passed`, () => {
    expect(detectDuplicates()).toBe(false);
  });
});
