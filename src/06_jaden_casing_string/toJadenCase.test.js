'use strict';

const { toJadenCase } = require('./toJadenCase');

describe(`Function 'toJadenCase':`, () => {
  it(`should be declared`, () => {
    expect(toJadenCase).toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof toJadenCase('I don’t know who you are')).toBe('string');
  });

  it(`should capitalize a single letter`, () => {
    expect(toJadenCase('i')).toBe('I');
  });

  it(`should capitalize a single word`, () => {
    expect(toJadenCase('welcome')).toBe('Welcome');
  });

  it(`should capitalize several words`, () => {
    expect(toJadenCase('is this a joke, i love you')).toBe(
      'Is This A Joke, I Love You',
    );
  });

  it(`should not change a string where every word is already capitalized`, () => {
    expect(toJadenCase('Jonah Hill Is A Genius')).toBe(
      'Jonah Hill Is A Genius',
    );
  });

  it(`should work with numbers and special characters`, () => {
    expect(toJadenCase('give Me 15 $ for Therapy when i Get older')).toBe(
      'Give Me 15 $ For Therapy When I Get Older',
    );
  });

  it(`should work with a string with several spaces in a row`, () => {
    expect(toJadenCase('give Me   more')).toBe('Give Me More');
  });
});
