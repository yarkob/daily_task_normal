'use strict';

const { switchLights } = require('./switchLights');

describe(`Function 'switchLights':`, () => {
  it(`should be declared`, () => {
    expect(switchLights).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(switchLights([0, 1, 1, 1, 0, 1, 0, 0], 3)).toBeInstanceOf(Array);
  });

  it(`should not change the 'lights' if 'n' = 0`, () => {
    expect(switchLights([0, 1, 1, 0, 0], 0)).toEqual([0, 1, 1, 0, 0]);
  });

  it(`should change the 'lights' once if 'n' = 1`, () => {
    expect(switchLights([1, 0], 1)).toEqual([1, 1]);
  });

  it(`should change the first light bulb according to the state of the last light bulb`, () => {
    const result = switchLights([0, 1, 0, 0, 0, 0, 0, 0, 1], 3);
    const firstLight = result[0];

    expect(firstLight).toBe(1);
  });

  it(`should change the 'lights' twice if 'n' = 2`, () => {
    expect(switchLights([1, 1, 0, 0, 0, 1, 0, 1], 2)).toEqual([
      1, 0, 1, 1, 0, 1, 0, 0,
    ]);
  });

  it(`should change the 'lights' three times if 'n' = 3`, () => {
    expect(switchLights([1, 1, 0, 0, 0, 1, 0, 1], 3)).toEqual([
      1, 1, 1, 0, 1, 1, 1, 0,
    ]);
  });

  it(`should change the 'lights' five times if 'n' = 5`, () => {
    expect(switchLights([0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0], 5)).toEqual([
      1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1,
    ]);
  });

  it(`should change the 'lights' ten times if 'n' = 10`, () => {
    expect(switchLights([0, 0, 1, 0, 1], 10)).toEqual([1, 1, 1, 0, 1]);
  });

  it(`should change the 'lights' ninety-nine times if 'n' = 99`, () => {
    expect(switchLights([0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 99)).toEqual([
      0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0,
    ]);
  });

  it(`should not change the 'lights' if all lights are off`, () => {
    expect(switchLights([0, 0, 0, 0, 0, 0], 15)).toEqual([0, 0, 0, 0, 0, 0]);
  });
});
