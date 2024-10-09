'use strict';

const { sortAnimals } = require('./sortAnimals');

describe(`Function 'sortAnimals':`, () => {
  it(`should be declared`, () => {
    expect(sortAnimals).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const animals = [
      { name: 'Cat', numberOfLegs: 4 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Parrot', numberOfLegs: 2 },
    ];

    expect(sortAnimals(animals)).toBeInstanceOf(Array);
  });

  it(`should not change the initial array`, () => {
    const animals = [
      { name: 'Panther', numberOfLegs: 4 },
      { name: 'Bee', numberOfLegs: 6 },
      { name: 'Hare', numberOfLegs: 4 },
      { name: 'Magpie', numberOfLegs: 2 },
    ];
    const initialNames = animals.map((animal) => animal.name);

    sortAnimals(animals);

    expect(animals.map((animal) => animal.name)).toEqual(initialNames);
  });

  it(`should sort an array only by number of legs if all numbers of legs are distinct`, () => {
    const animals = [
      { name: 'Cow', numberOfLegs: 4 },
      { name: 'Spider', numberOfLegs: 8 },
      { name: 'Flamingo', numberOfLegs: 2 },
    ];

    const sortedAnimals = [
      { name: 'Flamingo', numberOfLegs: 2 },
      { name: 'Cow', numberOfLegs: 4 },
      { name: 'Spider', numberOfLegs: 8 },
    ];

    expect(sortAnimals(animals)).toEqual(sortedAnimals);
  });

  it(`should sort an array only by name if all numbers of legs are equal`, () => {
    const animals = [
      { name: 'Sheep', numberOfLegs: 4 },
      { name: 'Goat', numberOfLegs: 4 },
      { name: 'Rat', numberOfLegs: 4 },
      { name: 'Mouse', numberOfLegs: 4 },
    ];

    const sortedAnimals = [
      { name: 'Goat', numberOfLegs: 4 },
      { name: 'Mouse', numberOfLegs: 4 },
      { name: 'Rat', numberOfLegs: 4 },
      { name: 'Sheep', numberOfLegs: 4 },
    ];

    expect(sortAnimals(animals)).toEqual(sortedAnimals);
  });

  it(`should sort an array by number of legs first and then by name`, () => {
    const animals = [
      { name: 'Wolf', numberOfLegs: 4 },
      { name: 'Worm', numberOfLegs: 0 },
      { name: 'Ladybug', numberOfLegs: 6 },
      { name: 'Lion', numberOfLegs: 4 },
      { name: 'Tiger', numberOfLegs: 4 },
      { name: 'Snake', numberOfLegs: 0 },
    ];

    const sortedAnimals = [
      { name: 'Snake', numberOfLegs: 0 },
      { name: 'Worm', numberOfLegs: 0 },
      { name: 'Lion', numberOfLegs: 4 },
      { name: 'Tiger', numberOfLegs: 4 },
      { name: 'Wolf', numberOfLegs: 4 },
      { name: 'Ladybug', numberOfLegs: 6 },
    ];

    expect(sortAnimals(animals)).toEqual(sortedAnimals);
  });

  it(`should perform a correct sorting of an array`, () => {
    const animals = [
      { name: 'Bear', numberOfLegs: 4 },
      { name: 'Swan', numberOfLegs: 2 },
      { name: 'Fish', numberOfLegs: 0 },
      { name: 'Crow', numberOfLegs: 2 },
      { name: 'Pig', numberOfLegs: 4 },
      { name: 'Leopard', numberOfLegs: 4 },
      { name: 'Sparrow', numberOfLegs: 2 },
      { name: 'Fox', numberOfLegs: 4 },
    ];

    const sortedAnimals = [
      { name: 'Fish', numberOfLegs: 0 },
      { name: 'Crow', numberOfLegs: 2 },
      { name: 'Sparrow', numberOfLegs: 2 },
      { name: 'Swan', numberOfLegs: 2 },
      { name: 'Bear', numberOfLegs: 4 },
      { name: 'Fox', numberOfLegs: 4 },
      { name: 'Leopard', numberOfLegs: 4 },
      { name: 'Pig', numberOfLegs: 4 },
    ];

    expect(sortAnimals(animals)).toEqual(sortedAnimals);
  });

  it(`should return null if animals = null`, () => {
    expect(sortAnimals(null)).toBe(null);
  });

  it(`should return an empty array if the input is an empty array`, () => {
    expect(sortAnimals([])).toEqual([]);
  });
});
