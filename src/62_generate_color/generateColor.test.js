'use strict';

const { generateColor } = require('./generateColor');

describe(`Function 'generateColor':`, () => {
  it(`should be declared`, () => {
    expect(generateColor).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof generateColor()).toBe('string');
  });

  it(`should return a string of 7 characters`, () => {
    expect(generateColor()).toHaveLength(7);
  });

  it(`should return a string with '#' as the first character`, () => {
    expect(generateColor()[0]).toBe('#');
  });

  it(`should return a string with a valid hex color`, () => {
    const regex = /^#[A-Fa-f0-9]{6}$/;

    expect(generateColor()).toMatch(regex);
  });

  it(`should return random hex colors when called ten times`, () => {
    const colors = [];

    for (let i = 0; i < 9; i++) {
      colors.push(generateColor());
    }

    function checkForDuplicates(colors2) {
      const colorsAlreadySeen = [];

      for (let i = 0; i < colors2.length; i++) {
        const value = colors2[i];

        if (colorsAlreadySeen.indexOf(value) !== -1) {
          return true;
        }
        colorsAlreadySeen.push(value);
      }

      return false;
    }

    expect(checkForDuplicates(colors)).toBe(false);
  });
});
