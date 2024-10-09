'use strict';

const { checkSafety } = require('./checkSafety');

describe(`Function 'checkSafety':`, () => {
  it(`should be declared`, () => {
    expect(checkSafety).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof checkSafety('security')).toBe('number');
  });

  it(`should return 0 if there are no triples formed by consecutive letters that can stay the same after shuffling`, () => {
    expect(checkSafety('dog')).toBe(0);
  });

  it(`should return 1 if there is one triple formed by consecutive letters that can stay the same after shuffling`, () => {
    expect(checkSafety('bell')).toBe(1);
  });

  it(`should return 2 if there are two triples formed by consecutive letters that can stay the same after shuffling`, () => {
    expect(checkSafety('loop')).toBe(2);
  });

  it(`should return 3 if there are three triples formed by consecutive letters that can stay the same after shuffling`, () => {
    expect(checkSafety('mirror')).toBe(3);
  });

  it(`should return 5 if there are five triples formed by consecutive letters that can stay the same after shuffling`, () => {
    expect(checkSafety('committee')).toBe(5);
  });

  it(`should return word.length - 2 if word consists of the same letter`, () => {
    expect(checkSafety('dddddddddddd')).toBe(10);
  });

  it(`should return 0 if the input string is empty`, () => {
    expect(checkSafety('')).toBe(0);
  });
});
