'use strict';

const { mumble } = require('./mumble');

describe(`Function 'mumble':`, () => {
  it(`should be declared`, () => {
    expect(mumble).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof mumble('Abc')).toBe('string');
  });

  it(`should work with the input of one letter`, () => {
    expect(mumble('r')).toBe('R');
  });

  it(`should work with the input of duplicate letters`, () => {
    expect(mumble('ww')).toBe('W-Ww');
  });

  it(`should work with the input of lowercase letters`, () => {
    expect(mumble('abc')).toBe('A-Bb-Ccc');
  });

  it(`should work with the input of uppercase letters`, () => {
    expect(mumble('CWAT')).toBe('C-Ww-Aaa-Tttt');
  });

  it(`should work with the input of uppercase and lowercase letters`, () => {
    expect(mumble('ZpglnR')).toBe('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr');
  });

  it(`should return an empty string if the input is empty`, () => {
    expect(mumble('')).toBe('');
  });
});
