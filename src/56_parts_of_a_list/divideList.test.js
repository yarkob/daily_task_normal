'use strict';

const { divideList } = require('./divideList');

describe(`Function 'divideList':`, () => {
  it(`should be declared`, () => {
    expect(divideList).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(divideList(['a', 'b', 'c', 'd', 'e'])).toBeInstanceOf(Array);
  });

  it(`should divide an array with two elements`, () => {
    expect(divideList(['alpha', 'bravo'])).toEqual([['alpha', 'bravo']]);
  });

  it(`should divide an array with three elements`, () => {
    expect(divideList(['apple', 'banana', 'orange'])).toEqual([
      ['apple', 'banana orange'],
      ['apple banana', 'orange'],
    ]);
  });

  it(`should divide an array with four elements`, () => {
    expect(divideList(['jeans', 'skirt', 'shirt', 'jacket'])).toEqual([
      ['jeans', 'skirt shirt jacket'],
      ['jeans skirt', 'shirt jacket'],
      ['jeans skirt shirt', 'jacket'],
    ]);
  });

  it(`should divide an array with seven elements`, () => {
    expect(
      divideList(['dog', 'cat', 'rat', 'turtle', 'rabbit', 'hamster', 'fish']),
    ).toEqual([
      ['dog', 'cat rat turtle rabbit hamster fish'],
      ['dog cat', 'rat turtle rabbit hamster fish'],
      ['dog cat rat', 'turtle rabbit hamster fish'],
      ['dog cat rat turtle', 'rabbit hamster fish'],
      ['dog cat rat turtle rabbit', 'hamster fish'],
      ['dog cat rat turtle rabbit hamster', 'fish'],
    ]);
  });

  it(`should divide an array with duplicates`, () => {
    expect(divideList(['test', 'test', 'test', 'test', 'test'])).toEqual([
      ['test', 'test test test test'],
      ['test test', 'test test test'],
      ['test test test', 'test test'],
      ['test test test test', 'test'],
    ]);
  });

  it(`should divide an array with numbers as strings`, () => {
    expect(divideList(['3', '19', '-4.5'])).toEqual([
      ['3', '19 -4.5'],
      ['3 19', '-4.5'],
    ]);
  });

  it(`should divide an array with strings with special symbols`, () => {
    expect(divideList(['^', '&&', '||', '()'])).toEqual([
      ['^', '&& || ()'],
      ['^ &&', '|| ()'],
      ['^ && ||', '()'],
    ]);
  });
});
