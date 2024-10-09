'use strict';

const { isPalindrome } = require('./isPalindrome');

describe(`Function 'isPalindrome':`, () => {
  it(`should return a boolean`, () => {
    expect(typeof isPalindrome('level')).toBe('boolean');
  });

  it(`returns true for 1 character string`, () => {
    expect(isPalindrome('e')).toBe(true);
  });

  it(`returns true for 'wow' (lower case palindrome)`, () => {
    expect(isPalindrome('wow')).toBe(true);
  });

  it(`returns true for 'REFER' (upper case palindrome)`, () => {
    expect(isPalindrome('REFER')).toBe(true);
  });

  it(`returns true for 'rAdaR' (mixed case palindrome)`, () => {
    expect(isPalindrome('rAdaR')).toBe(true);
  });

  it(`returns true for '123454321' (numeric palindrome)`, () => {
    expect(isPalindrome('123454321')).toBe(true);
  });

  it(`returns true for '9Hannah9' (alpha-numeric palindrome)`, () => {
    expect(isPalindrome('9Hannah9')).toBe(true);
  });

  it(`returns true for 'Step on no pets' (Mixed case palindrome with spaces)`, () => {
    expect(isPalindrome('Step on no pets')).toBe(true);
  });

  it(`returns true for 'A man, a plan, a canal: Panama' (mixed case palindrome with spaces and punctuation)`, () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it(`returns false for 'letter' (lower case non palindrome)`, () => {
    expect(isPalindrome('letter')).toBe(false);
  });

  it(`returns false for '12345432' (numeric non palindrome)`, () => {
    expect(isPalindrome('12345432')).toBe(false);
  });

  it(`returns false for 'det6rtrat5d' (alpha-numeric non palindrome)`, () => {
    expect(isPalindrome('det6rtrat5d')).toBe(false);
  });
});
