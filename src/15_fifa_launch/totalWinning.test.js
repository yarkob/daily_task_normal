'use strict';

const { totalWinning } = require('./totalWinning');

describe(`Function 'totalWinning':`, () => {
  it(`should be declared`, () => {
    expect(totalWinning).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    const ticket = {
      Home: '£74',
      Away: '£36',
      Draw: '£5',
    };

    const results = ['2-4', '0-3', '0-1'];

    expect(typeof totalWinning(ticket, results)).toBe('string');
  });

  it(`should work if home wins`, () => {
    const ticket = {
      Home: '£555',
      Away: '£209',
      Draw: '£600',
    };

    const results = ['1-0', '1-1', '3-1'];

    expect(totalWinning(ticket, results)).toBe('£555');
  });

  it(`should work if away wins`, () => {
    const ticket = {
      Home: '£555',
      Away: '£209',
      Draw: '£600',
    };

    const results = ['2-5', '1-3', '2-0'];

    expect(totalWinning(ticket, results)).toBe('£209');
  });

  it(`should work if there is a draw`, () => {
    const ticket = {
      Home: '£555',
      Away: '£209',
      Draw: '£600',
    };

    const results = ['2-5', '1-1', '2-2'];

    expect(totalWinning(ticket, results)).toBe('£600');
  });

  it(`should sum winning for two wins`, () => {
    const ticket = {
      Home: '£90',
      Away: '£325',
      Draw: '£65',
    };

    const results = ['3-2', '1-0', '3-3'];

    expect(totalWinning(ticket, results)).toBe('£155');
  });

  it(`should sum winning for three wins`, () => {
    const ticket = {
      Home: '£90',
      Away: '£325',
      Draw: '£65',
    };

    const results = ['3-2', '0-1', '3-3'];

    expect(totalWinning(ticket, results)).toBe('£480');
  });

  it(`should return '£0' if there is no winning`, () => {
    const ticket = {
      Home: '£90',
      Away: '£325',
      Draw: '£65',
    };

    const results = ['2-5', '4-4', '5-0'];

    expect(totalWinning(ticket, results)).toBe('£0');
  });

  it(`should work if results contain two-digit numbers`, () => {
    const ticket = {
      Home: '£22',
      Away: '£44',
      Draw: '£88',
    };

    const results = ['12-8', '6-10', '10-11'];

    expect(totalWinning(ticket, results)).toBe('£66');
  });
});
