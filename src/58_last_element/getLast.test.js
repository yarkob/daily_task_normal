'use strict';

const { getLast } = require('./getLast');

describe(`Function 'getLast':`, () => {
  it(`should be declared`, () => {
    expect(getLast).toBeInstanceOf(Function);
  });

  it(`should return the last element of the array if 'list' is an array`, () => {
    const arr = [1, 2, 3, 4, 5, 6];

    expect(getLast(arr)).toBe(6);
  });

  it(`should return the last character of the string if 'list' is a string`, () => {
    const str = 'qwertyuiop';

    expect(getLast(str)).toBe('p');
  });

  it(`should return the last argument if 'list' is a list of arguments`, () => {
    const arg1 = 3;
    const arg2 = -8;
    const arg3 = 22;

    expect(getLast(arg1, arg2, arg3)).toBe(22);
  });

  it(`should return the first element of the array if 'list' is a one-element array`, () => {
    const arr = [4];

    expect(getLast(arr)).toBe(4);
  });

  it(`should return the first character of the string if 'list' is a one-character string`, () => {
    const str = 'm';

    expect(getLast(str)).toBe('m');
  });

  it(`should return the argument if 'list' is a list of one argument`, () => {
    const arg1 = 0.8;

    expect(getLast(arg1)).toBe(0.8);
  });

  it(`should return an empty array if 'list' is an empty array`, () => {
    const arr = [];

    expect(getLast(arr)).toEqual([]);
  });

  it(`should return an empty string if 'list' is an empty string`, () => {
    const str = '';

    expect(getLast(str)).toBe('');
  });
});
