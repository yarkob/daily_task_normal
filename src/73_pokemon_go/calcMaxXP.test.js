'use strict';

const { calcMaxXP } = require('./calcMaxXP');

describe(`Function 'calcMaxXP':`, () => {
  it(`should be declared`, () => {
    expect(calcMaxXP).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof calcMaxXP(9, 64)).toBe('number');
  });

  it(`should return 500 if pidgeys = 1 and candies = 12`, () => {
    expect(calcMaxXP(1, 12)).toBe(500);
  });

  it(`should return 500 if pidgeys = 1 and candies = 63`, () => {
    expect(calcMaxXP(1, 63)).toBe(500);
  });

  it(`should return 1000 if pidgeys = 11 and candies = 21`, () => {
    expect(calcMaxXP(11, 21)).toBe(1000);
  });

  it(`should return 1000 if pidgeys = 17 and candies = 9`, () => {
    expect(calcMaxXP(17, 9)).toBe(1000);
  });

  it(`should return 2000 if pidgeys = 15 and candies = 44`, () => {
    expect(calcMaxXP(15, 44)).toBe(2000);
  });

  it(`should return 3000 if pidgeys = 10 and candies = 63`, () => {
    expect(calcMaxXP(10, 63)).toBe(3000);
  });

  it(`should return 5000 if pidgeys = 66 and candies = 65`, () => {
    expect(calcMaxXP(66, 65)).toBe(5000);
  });

  it(`should return 6500 if pidgeys = 13 and candies = 144`, () => {
    expect(calcMaxXP(13, 144)).toBe(6500);
  });

  it(`should return 7500 if pidgeys = 96 and candies = 90`, () => {
    expect(calcMaxXP(96, 90)).toBe(7500);
  });

  it(`should return 0 if pidgeys = 0 and candies = 0`, () => {
    expect(calcMaxXP(0, 0)).toBe(0);
  });

  it(`should return 0 if pidgeys = 1 and candies = 11`, () => {
    expect(calcMaxXP(1, 11)).toBe(0);
  });
});
