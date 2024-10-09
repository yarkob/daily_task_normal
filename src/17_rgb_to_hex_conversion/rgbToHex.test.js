'use strict';

const { rgbToHex } = require('./rgbToHex');

describe(`Function 'rgbToHex':`, () => {
  it(`should be declared`, () => {
    expect(rgbToHex).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof rgbToHex(123, 104, 238)).toBe('string');
  });

  it(`should return a string with a length of 6 characters`, () => {
    expect(rgbToHex(124, 252, 0)).toHaveLength(6);
  });

  it(`should return a string with uppercase characters`, () => {
    const result = rgbToHex(85, 107, 47).toUpperCase();

    expect(rgbToHex(85, 107, 47)).toBe(result);
  });

  it(`should round any value that is greater than 255 to 255`, () => {
    expect(rgbToHex(256, 99, 71)).toBe('FF6347');
  });

  it(`should round any value that is less than 0 to 0`, () => {
    expect(rgbToHex(148, -1, 211)).toBe('9400D3');
  });

  it(`should return the correct hex color for the values 0, 0, 0`, () => {
    expect(rgbToHex(0, 0, 0)).toBe('000000');
  });

  it(`should return the correct hex color for the values 255, 255, 255`, () => {
    expect(rgbToHex(255, 255, 255)).toBe('FFFFFF');
  });

  it(`should return the correct hex color for the values 95, 158, 160`, () => {
    expect(rgbToHex(95, 158, 160)).toBe('5F9EA0');
  });

  it(`should return the correct hex color for the values 128, 128, 128`, () => {
    expect(rgbToHex(128, 128, 128)).toBe('808080');
  });

  it(`should return the correct hex color for the values 2, 5, 7`, () => {
    expect(rgbToHex(2, 5, 7)).toBe('020507');
  });
});
