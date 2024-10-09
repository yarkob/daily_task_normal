'use strict';

const { calcString } = require('./calcString');

describe(`Function 'calcString':`, () => {
  it(`should be declared`, () => {
    expect(calcString).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof calcString('1plus2')).toBe('string');
  });

  it(`should work with a string with plus`, () => {
    expect(calcString('2plus2')).toBe('4');
  });

  it(`should work with a string with minus`, () => {
    expect(calcString('7minus5')).toBe('2');
  });

  it(`should work with a string with multiple pluses`, () => {
    expect(calcString('6plus2plus9')).toBe('17');
  });

  it(`should work with a string with multiple minuses`, () => {
    expect(calcString('20minus10minus5')).toBe('5');
  });

  it(`should work with a string with a mix of pluses and minuses`, () => {
    expect(calcString('4plus5minus2plus6')).toBe('13');
  });

  it(`should work with a string with negative integers`, () => {
    expect(calcString('-6plus-8minus-9')).toBe('-5');
  });

  it(`should work with a string with a mix of positive and negative integers`, () => {
    expect(calcString('12plus-4plus3minus7minus-1')).toBe('5');
  });

  it(`should work with a string with zero`, () => {
    expect(calcString('41minus0plus0')).toBe('41');
  });

  it(`should work with a string containing one integer`, () => {
    expect(calcString('93')).toBe('93');
  });
});
