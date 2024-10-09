'use strict';

const { formatNumber } = require('./formatNumber');

describe(`Function 'formatNumber':`, () => {
  it(`should be declared`, () => {
    expect(formatNumber).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof formatNumber('aaa aaa aaa', 123123123)).toBe('string');
  });

  it(`should replace all lowercase letters with numbers`, () => {
    expect(formatNumber('xxxx xxxx xxxx', 234509342856)).toBe('2345 0934 2856');
  });

  it(`should replace all uppercase letters with numbers`, () => {
    expect(formatNumber('XXXX YY ZZZZ', 1936935967)).toBe('1936 93 5967');
  });

  it(`should replace both uppercase and lowercase letters with numbers`, () => {
    expect(formatNumber('aaAAAAaAaa bbCC Ddd', 34594395496240292)).toBe(
      '3459439549 6240 292',
    );
  });

  it(`should use 1234567890 as a default number if number is not passed`, () => {
    expect(formatNumber('xxx xxx xxxx')).toBe('123 456 7890');
  });

  it(`should not replace special characters in the template with numbers`, () => {
    expect(formatNumber('+nn (nnn) nnn nn nn', 380294943839)).toBe(
      '+38 (029) 494 38 39',
    );
  });

  it(`should not replace numbers in the template with other numbers`, () => {
    expect(formatNumber('301 dddd ee fff gg', 39584928503)).toBe(
      '301 3958 49 285 03',
    );
  });

  it(`should not add extra digits if number contains more digits than needed for a template`, () => {
    expect(formatNumber('xxx xxx xxx x', 42048049894849)).toBe('420 480 498 9');
  });

  it(`should repeat the digits from number if template needs more digits that number has`, () => {
    expect(formatNumber('IIIII JJJJJ KKKKK LLLLL', 295930469)).toBe(
      '29593 04692 95930 46929',
    );
  });

  it(`should work for a template with different chars`, () => {
    expect(formatNumber('las wkJd 2-30fgjg +nvTdjbf Jis3')).toBe(
      '123 4567 2-308901 +2345678 9013',
    );
  });
});
