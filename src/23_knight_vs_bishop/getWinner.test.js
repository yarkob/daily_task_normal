'use strict';

const { getWinner } = require('./getWinner');

describe(`Function 'getWinner':`, () => {
  it(`should be declared`, () => {
    expect(getWinner).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof getWinner([4, 'C'], [6, 'D'])).toBe('string');
  });

  it(`should work when a knight wins`, () => {
    expect(getWinner([5, 'D'], [7, 'E'])).toBe('Knight');
  });

  it(`should work when a bishop wins`, () => {
    expect(getWinner([2, 'G'], [6, 'C'])).toBe('Bishop');
  });

  it(`should work when no one wins`, () => {
    expect(getWinner([2, 'F'], [7, 'B'])).toBe('None');
  });

  it(`should work when pieces are in the corners of the chessboard`, () => {
    expect(getWinner([1, 'A'], [8, 'H'])).toBe('Bishop');
  });

  it(`should work when knight is at the edge of the chessboard`, () => {
    expect(getWinner([8, 'D'], [7, 'F'])).toBe('Knight');
  });

  it(`should work when pieces touch orthogonally`, () => {
    expect(getWinner([5, 'D'], [5, 'E'])).toBe('None');
  });
});
