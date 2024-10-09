'use strict';

const { countDuplicates } = require('./countDuplicates');

describe(`Function 'countDuplicates':`, () => {
  it(`should be declared`, () => {
    expect(countDuplicates).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countDuplicates('aaBb')).toBe('number');
  });

  it(`should return 0 if 'str' contains only one character`, () => {
    expect(countDuplicates('5')).toBe(0);
  });

  it(`should return 0 if 'str' doesn't contain duplicates`, () => {
    expect(countDuplicates('efg123')).toBe(0);
  });

  it(`should return 1 if 'str' contains only one duplicate and it is repeated twice`, () => {
    expect(countDuplicates('4gh4sd')).toBe(1);
  });

  it(`should return 1 if 'str' contains only one duplicate and it is repeated more than twice`, () => {
    expect(countDuplicates('advaaja0')).toBe(1);
  });

  it(`should return 1 if 'str' contains several same characters`, () => {
    expect(countDuplicates('pppppppp')).toBe(1);
  });

  it(`should return 2 if 'str' contains only two different duplicates`, () => {
    expect(countDuplicates('ccdd')).toBe(2);
  });

  it(`should work with letters`, () => {
    expect(countDuplicates('checktheduplicates')).toBe(4);
  });

  it(`should work with numbers`, () => {
    expect(countDuplicates('993203304')).toBe(3);
  });

  it(`should be case insensitive`, () => {
    expect(countDuplicates('tesTing')).toBe(1);
  });

  it(`should return 0 if input is an empty string`, () => {
    expect(countDuplicates('')).toBe(0);
  });
});
