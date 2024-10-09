'use strict';

const { getMove } = require('./getMove');

describe(`Function 'getMove':`, () => {
  it(`should be declared`, () => {
    expect(getMove).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof getMove(['0', '', 'X', '', '', 'X', '', '', 'O'])).toBe(
      'number',
    );
  });

  it(`should return any available position if all positions are empty`, () => {
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8]).toContain(
      getMove(['', '', '', '', '', '', '', '', '']),
    );
  });

  it(`should return any available position if there is only one 'X' on the board`, () => {
    expect([0, 1, 2, 3, 4, 5, 8]).toContain(
      getMove(['', '', '', '', '', '', 'O', 'X', '']),
    );
  });

  it(`should return any available position if there are two 'X's on the board but there is no winning move`, () => {
    expect([0, 2, 4, 5, 8]).toContain(
      getMove(['', 'X', '', '0', '', '', 'X', '0', '']),
    );
  });

  it(`should return any available position if there are three 'X's on the board but there is no winning move`, () => {
    expect([3, 4, 5]).toContain(
      getMove(['X', '0', 'X', '', '', '', '0', 'X', '0']),
    );
  });

  it(`should return any available position if there are four 'X's on the board but there is no winning move`, () => {
    expect([8]).toContain(
      getMove(['0', 'X', '0', 'X', '0', 'X', '0', 'X', '']),
    );
  });

  it(`should return a winning move if there is only one option to win`, () => {
    expect([0]).toContain(getMove(['', '0', '', 'X', '', '0', 'X', '', '']));
  });

  it(`should return a winning move if there is only one option to win but several combinations can be made`, () => {
    expect([2]).toContain(
      getMove(['X', 'X', '', '0', '0', 'X', '0', '0', 'X']),
    );
  });

  it(`should return any winning move if there are two options to win`, () => {
    expect([3, 7]).toContain(
      getMove(['X', '0', '', '', '0', '', 'X', '', 'X']),
    );
  });
});
