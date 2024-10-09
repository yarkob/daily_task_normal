'use strict';

const { getRatio } = require('./getRatio');

describe(`Function 'getRatio':`, () => {
  it(`should be declared`, () => {
    expect(getRatio).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof getRatio('adfghjtkff')).toBe('string');
  });

  it(`should return a 0 as the first char of the result if there are no errors`, () => {
    expect(getRatio('addddafffghhhkaaaeee')).toBe('0/20');
  });

  it(`should return colors.length as the last chars in the result`, () => {
    expect(getRatio('gggghhhhxxxx')).toBe('4/12');
  });

  it(`should treat 'm' as a valid color`, () => {
    expect(getRatio('mamamam')).toBe('0/7');
  });

  it(`should treat 'n' as an error`, () => {
    expect(getRatio('fanfanfan')).toBe('3/9');
  });

  it(`should return 1 as the first char of the result if there is only one error`, () => {
    expect(getRatio('decades')).toBe('1/7');
  });

  it(`should return 2 as the first char of the result if there are two errors`, () => {
    expect(getRatio('cats')).toBe('2/4');
  });

  it(`should the exact number of errors as the first char(s)`, () => {
    expect(
      getRatio('csfjsdjfesdlidcfieiwqqoritivuvuixhxxbvbhabshqqbcsbvbhxnskcdjs'),
    ).toBe('26/61');
  });

  it(`should return colors.length as the firts char(s) if all chars are errors`, () => {
    expect(getRatio('poststop')).toBe('8/8');
  });

  it(`should return '0/0' if the input string is empty`, () => {
    expect(getRatio('')).toBe('0/0');
  });
});
