'use strict';

const { getComplementaryColor } = require('./getComplementaryColor');

describe(`Function 'getComplementaryColor':`, () => {
  it(`should be declared`, () => {
    expect(getComplementaryColor).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof getComplementaryColor('556B2F')).toBe('string');
  });

  it(`should throw an error if 'hexColor' is not a string`, () => {
    expect(() => {
      getComplementaryColor(24932939);
    }).toThrowError();
  });

  it(`should throw an error if 'hexColor' is longer than 6 characters`, () => {
    expect(() => {
      getComplementaryColor('9ACdF32');
    }).toThrowError();
  });

  it(`should throw an error if 'hexColor' contains not only hex-chars`, () => {
    expect(() => {
      getComplementaryColor('bC8f8G');
    }).toThrowError();
  });

  it(`should return a resulting color with a hash-char '#'`, () => {
    expect(getComplementaryColor('F0E68C').charAt(0)).toBe('#');
  });

  it(`should return a resulting color with letters in uppercase`, () => {
    const result = getComplementaryColor('dDa0dD').toUpperCase();

    expect(getComplementaryColor('dDa0dD')).toBe(result);
  });

  it(`should return '#FFFFFF' if 'hexColor' is '0'`, () => {
    expect(getComplementaryColor('0')).toBe('#FFFFFF');
  });

  it(`should add missing zeroes if hexColor.length is less than 6`, () => {
    expect(getComplementaryColor('ed8')).toBe('#FFF127');
  });

  it(`should return a complementary color for 'FFFFFF'`, () => {
    expect(getComplementaryColor('FFFFFF')).toBe('#000000');
  });

  it(`should return a complementary color for 'Dc143c'`, () => {
    expect(getComplementaryColor('Dc143c')).toBe('#23EBC3');
  });

  it(`should return a complementary color for '00fa9a'`, () => {
    expect(getComplementaryColor('00fa9a')).toBe('#FF0565');
  });

  it(`should return a complementary color for '356178'`, () => {
    expect(getComplementaryColor('356178')).toBe('#CA9E87');
  });
});
