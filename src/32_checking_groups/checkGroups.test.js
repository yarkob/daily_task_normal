'use strict';

const { checkGroups } = require('./checkGroups');

describe(`Function 'checkGroups':`, () => {
  it(`should be declared`, () => {
    expect(checkGroups).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof checkGroups('{){')).toBe('boolean');
  });

  it(`should return true for a correct pair of parentheses`, () => {
    expect(checkGroups('()')).toBe(true);
  });

  it(`should return true for a correct pair of square brackets`, () => {
    expect(checkGroups('[]')).toBe(true);
  });

  it(`should return true for a correct pair of curly brackets`, () => {
    expect(checkGroups('{}')).toBe(true);
  });

  it(`should return false for an incorrect pair of parentheses`, () => {
    expect(checkGroups(')(')).toBe(false);
  });

  it(`should return false for an incorrect pair of square brackets`, () => {
    expect(checkGroups('][')).toBe(false);
  });

  it(`should return false for an incorrect pair of curly brackets`, () => {
    expect(checkGroups('}{')).toBe(false);
  });

  it(`should return true for a balanced group of different types of brackets`, () => {
    expect(checkGroups('{{[()]}}([()])')).toBe(true);
  });

  it(`should return false for an unbalanced group of different types of brackets`, () => {
    expect(checkGroups('{((}}[()')).toBe(false);
  });

  it(`should return false for a group of different types of brackets which are closed in a wrong order`, () => {
    expect(checkGroups('{[(}])')).toBe(false);
  });

  it(`should return false for a group of different types of brackets which is closed before opening`, () => {
    expect(checkGroups(')([]{{}}][')).toBe(false);
  });

  it(`should return true if the input string is empty`, () => {
    expect(checkGroups('')).toBe(true);
  });
});
