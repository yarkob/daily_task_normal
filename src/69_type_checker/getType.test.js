'use strict';

const { getType } = require('./getType');

describe(`Function 'getType':`, () => {
  it(`should be declared`, () => {
    expect(getType).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof getType(94)).toBe('string');
  });

  it(`should return 'Undefined' if val = undefined`, () => {
    expect(getType(undefined)).toBe('Undefined');
  });

  it(`should return 'Null' if val = null`, () => {
    expect(getType(null)).toBe('Null');
  });

  it(`should return 'Boolean' if val = true`, () => {
    expect(getType(true)).toBe('Boolean');
  });

  it(`should return 'Function' if val = function(){}`, () => {
    expect(getType(function () {})).toBe('Function');
  });

  it(`should return 'Function' if val = Math.abs`, () => {
    expect(getType(Math.abs)).toBe('Function');
  });

  it(`should return 'Object' if val = {planet: 'Earth'}`, () => {
    expect(getType({ planet: 'Earth' })).toBe('Object');
  });

  it(`should return 'String' if val = 'qwerty'`, () => {
    expect(getType('qwerty')).toBe('String');
  });

  it(`should return 'String Numeric' if val = '456'`, () => {
    expect(getType('456')).toBe('String Numeric');
  });

  it(`should return 'String Numeric' if val = '9.8'`, () => {
    expect(getType('9.8')).toBe('String Numeric');
  });

  it(`should return 'String Numeric' if val = '0xD6E6'`, () => {
    expect(getType('0xD6E6')).toBe('String Numeric');
  });

  it(`should return 'Number Integer' if val = 987`, () => {
    expect(getType(987)).toBe('Number Integer');
  });

  it(`should return 'Number NaN' if val = NaN`, () => {
    expect(getType(NaN)).toBe('Number NaN');
  });

  it(`should return 'Number Infinite' if val = Infinity`, () => {
    expect(getType(Infinity)).toBe('Number Infinite');
  });

  it(`should return 'Number Infinite' if val = 10 / 0`, () => {
    expect(getType(10 / 0)).toBe('Number Infinite');
  });

  it(`should return 'Number Float' if val = 3.14`, () => {
    expect(getType(3.14)).toBe('Number Float');
  });

  it(`should return 'RegExp' if val = /[A-Z]/`, () => {
    expect(getType(/[A-Z]/)).toBe('RegExp');
  });

  it(`should return 'Array' if val = [1, 'a', false]`, () => {
    expect(getType([1, 'a', false])).toBe('Array');
  });

  it(`should return 'Set' if val = new Set`, () => {
    expect(getType(new Set())).toBe('Set');
  });

  it(`should return the name of the function if val is created from custom function`, () => {
    function MyLittleFunction() {}

    expect(getType(new MyLittleFunction())).toBe('MyLittleFunction');
  });
});
