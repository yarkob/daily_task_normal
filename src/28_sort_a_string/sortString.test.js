'use strict';

const { sortString } = require('./sortString');

describe(`Function 'sortString':`, () => {
  it(`should be declared`, () => {
    expect(sortString).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof sortString('the2 4be y6ou Ma1y with5 force3')).toBe('string');
  });

  it(`should not change anything if the input string consists of one word`, () => {
    expect(sortString('Hell1o')).toBe('Hell1o');
  });

  it(`should sort the string of two words according to the numbers they contain`, () => {
    expect(sortString('world2 Hell1o')).toBe('Hell1o world2');
  });

  it(`should sort the string of three words according to the numbers they contain`, () => {
    expect(sortString('2is fun3 Javascri1pt')).toBe('Javascri1pt 2is fun3');
  });

  it(`should sort the string of four words according to the numbers they contain`, () => {
    expect(sortString('string3 this2 ple4ase so1rt')).toBe(
      'so1rt this2 string3 ple4ase',
    );
  });

  it(`should sort the string of five words according to the numbers they contain`, () => {
    expect(sortString('know2 4Jon You1 S5now nothin3g')).toBe(
      'You1 know2 nothin3g 4Jon S5now',
    );
  });

  it(`should sort the string of nine words according to the numbers they contain`, () => {
    expect(
      sortString('five5 thre3e se7ven two2 nin9e 6six fo4ur one1 eig8ht'),
    ).toBe('one1 two2 thre3e fo4ur five5 6six se7ven eig8ht nin9e');
  });

  it(`should return an empty string if the input is empty`, () => {
    expect(sortString('')).toBe('');
  });
});
