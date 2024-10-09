'use strict';

const { numberToTitle } = require('./numberToTitle');

describe(`Function 'numberToTitle':`, () => {
  it(`should be declared`, () => {
    expect(numberToTitle).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof numberToTitle(29)).toBe('string');
  });

  it(`should return 'A' if num = 1`, () => {
    expect(numberToTitle(1)).toBe('A');
  });

  it(`should return 'B' if num = 2`, () => {
    expect(numberToTitle(2)).toBe('B');
  });

  it(`should return 'J' if num = 10`, () => {
    expect(numberToTitle(10)).toBe('J');
  });

  it(`should return 'Z' if num = 26`, () => {
    expect(numberToTitle(26)).toBe('Z');
  });

  it(`should return 'AA' if num = 27`, () => {
    expect(numberToTitle(27)).toBe('AA');
  });

  it(`should return 'AB' if num = 28`, () => {
    expect(numberToTitle(28)).toBe('AB');
  });

  it(`should return 'SR' if num = 512`, () => {
    expect(numberToTitle(512)).toBe('SR');
  });

  it(`should return 'ZY' if num = 701`, () => {
    expect(numberToTitle(701)).toBe('ZY');
  });

  it(`should return 'AAA' if num = 703`, () => {
    expect(numberToTitle(703)).toBe('AAA');
  });

  it(`should return 'ALL' if num = 1000`, () => {
    expect(numberToTitle(1000)).toBe('ALL');
  });

  it(`should return 'NTO' if num = 9999`, () => {
    expect(numberToTitle(9999)).toBe('NTO');
  });

  it(`should return 'ZZZ' if num = 18278`, () => {
    expect(numberToTitle(18278)).toBe('ZZZ');
  });

  it(`should return 'FZPH' if num = 123456`, () => {
    expect(numberToTitle(123456)).toBe('FZPH');
  });

  it(`should return 'CECGIBQ' if num = 987654321`, () => {
    expect(numberToTitle(987654321)).toBe('CECGIBQ');
  });
});
