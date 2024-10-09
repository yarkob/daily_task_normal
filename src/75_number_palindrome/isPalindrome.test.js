'use strict';

const { isPalindrome } = require('./isPalindrome');

describe(`Function 'isPalindrome':`, () => {
  it(`should be declared`, () => {
    expect(isPalindrome).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isPalindrome(454)).toBe('boolean');
  });

  it(`should return true for a positive one-digit number`, () => {
    expect(isPalindrome(5)).toBe(true);
  });

  it(`should return true for a positive two-digit number consisting of the same digits`, () => {
    expect(isPalindrome(77)).toBe(true);
  });

  it(`should return true for a positive three-digit number consisting of the same digits`, () => {
    expect(isPalindrome(222)).toBe(true);
  });

  it(`should return true for a positive three-digit palindrome number`, () => {
    expect(isPalindrome(383)).toBe(true);
  });

  it(`should return true for a positive long palindrome number`, () => {
    expect(isPalindrome(331640595046133)).toBe(true);
  });

  it(`should return false for a negative one-digit number`, () => {
    expect(isPalindrome(-9)).toBe(false);
  });

  it(`should return false for a positive two-digit number consisting of different digits`, () => {
    expect(isPalindrome(16)).toBe(false);
  });

  it(`should return false for a negative two-digit number consisting of the same digits`, () => {
    expect(isPalindrome(-88)).toBe(false);
  });

  it(`should return false for a positive three-digit number which is not a palindrome`, () => {
    expect(isPalindrome(702)).toBe(false);
  });
});
