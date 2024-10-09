'use strict';

const { adviseBefore } = require('./adviseBefore');

describe(`Function 'adviseBefore':`, () => {
  it(`should be declared`, () => {
    expect(adviseBefore).toBeInstanceOf(Function);
  });

  it(`should pass the array to the target function if advice function returns an array`, () => {
    const target = function (arr) {
      return arr.map((x) => x * 2);
    };

    const advice = function (...args) {
      return [args];
    };

    const result = adviseBefore(target, advice)(1, 2, 3);

    expect(result).toEqual([2, 4, 6]);
  });

  it(`should pass the original arguments to the target function if advice function returns a number`, () => {
    const target = function (num) {
      const numArray = [];

      for (let i = 1; i <= num; i++) {
        numArray.push(i);
      }

      return numArray;
    };

    const advice = function (num) {
      return Math.floor(num);
    };

    const result = adviseBefore(target, advice)(5.3);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it(`should pass the original arguments to the target function if advice function returns a string`, () => {
    const target = function (...letters) {
      const reversed = letters.reverse().join('');

      return reversed;
    };

    const advice = function (...letters) {
      return letters.join('');
    };

    const result = adviseBefore(target, advice)('a', 'b', 'c', 'd', 'e');

    expect(result).toEqual('edcba');
  });

  it(`should pass the original arguments to the target function if advice function returns a boolean`, () => {
    const target = function (string) {
      return string.split(' ');
    };

    const advice = function (string) {
      return string.length === 11;
    };

    const result = adviseBefore(target, advice)('hello world');

    expect(result).toEqual(['hello', 'world']);
  });
});
