'use strict';

const { countUnluckyDays } = require('./countUnluckyDays');

describe(`Function 'countUnluckyDays':`, () => {
  it(`should be declared`, () => {
    expect(countUnluckyDays).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countUnluckyDays(1618)).toBe('number');
  });

  it(`should return 1 if the year is -3`, () => {
    expect(countUnluckyDays(-3)).toBe(1);
  });

  it(`should return 1 if the year is 0`, () => {
    expect(countUnluckyDays(0)).toBe(1);
  });

  it(`should return 1 if the year is 918`, () => {
    expect(countUnluckyDays(918)).toBe(1);
  });

  it(`should return 3 if the year is 1001`, () => {
    expect(countUnluckyDays(1001)).toBe(3);
  });

  it(`should return 1 if the year is 1586`, () => {
    expect(countUnluckyDays(1586)).toBe(1);
  });

  it(`should return 3 if the year is 2065`, () => {
    expect(countUnluckyDays(2065)).toBe(3);
  });

  it(`should return 2 if the year is 2819`, () => {
    expect(countUnluckyDays(2819)).toBe(2);
  });
});
