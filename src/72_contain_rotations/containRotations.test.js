'use strict';

const { containRotations } = require('./containRotations');

describe(`Function 'containRotations':`, () => {
  it(`should be declared`, () => {
    expect(containRotations).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof containRotations('', [])).toBe('boolean');
  });

  it(`should return true for empty string and empty array`, () => {
    expect(containRotations('', [])).toBeTruthy();
  });

  it(`should return false for empty array`, () => {
    expect(containRotations('string', [])).toBeFalsy();
  });

  it(`should return true for empty string`, () => {
    expect(containRotations('', ['abc', 'cba'])).toBeTruthy();
  });

  it(`should return true if all rotations of 'string' are included in array`, () => {
    expect(
      containRotations('string', [
        'string',
        'gstrin',
        'ngstri',
        'ingstr',
        'ringst',
        'TwshnUh',
        'trings',
      ]),
    ).toBeTruthy();
  });

  it(`should return false if array does not include all rotations of 'word'`, () => {
    expect(
      containRotations('word', ['word', 'dwor', 'rdow', 'Drow', 'rrwd']),
    ).toBeFalsy();
  });

  it(`should return true if all rotations of string with numbers are included in array`, () => {
    expect(
      containRotations('12aB', ['12aB', '2aB1', 'aB12', 'B12a']),
    ).toBeTruthy();
  });

  it(`should return true if all rotations of string with spaces are included in array`, () => {
    expect(
      containRotations('rota te', [
        'rota te',
        'ota ter',
        'ta tero',
        'a terot',
        ' terota',
        'terota ',
        'erota t',
        'ROTATE',
      ]),
    ).toBeTruthy();
  });

  it(`should return true if all rotations of string with special symbols are included in array`, () => {
    expect(
      containRotations('ROT&TE?', [
        'ROT&TE?',
        'OT&TE?R',
        'T&TE?RO',
        '&TE?ROT',
        'TE?ROT&',
        'E?ROT&T',
        '?ROT&TE',
      ]),
    ).toBeTruthy();
  });
});
