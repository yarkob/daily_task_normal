'use strict';

const { createList } = require('./createList');

describe(`Function 'createList':`, () => {
  it(`should be declared`, () => {
    expect(createList).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const objs = [
      { species: 'dog', legs: 4 },
      { species: 'cat', legs: 4 },
      { species: 'snake', eyes: 2 },
    ];
    const result = createList(objs, 'legs');

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return an array with appropriate values if all objects have the 'name' property`, () => {
    const objs = [
      { item: 'book', price: 50 },
      { item: 'pencil', price: 5 },
      { item: 'pen', price: 10 },
    ];
    const result = createList(objs, 'price');

    expect(result).toEqual([50, 5, 10]);
  });

  it(`should add undefined to an array if an object doesn't contain the 'name' property`, () => {
    const objs = [
      { item: 'jacket', sleeves: 2 },
      { item: 'shirt', sleeves: 2 },
      { item: 'hat' },
    ];
    const result = createList(objs, 'sleeves');

    expect(result).toEqual([2, 2, undefined]);
  });

  it(`should add array to an array if 'name' property of an object is an array`, () => {
    const objs = [
      { girls: ['Alice', 'Megan'], boys: ['Alex', 'David'] },
      { girls: ['Eva'], boys: ['Kevin', 'Will'] },
      { girls: ['Serena', 'Emma', 'Amanda'], boys: ['John'] },
      { girls: [], boys: ['Robert', 'Jack'] },
    ];
    const result = createList(objs, 'girls');

    expect(result).toEqual([
      ['Alice', 'Megan'],
      ['Eva'],
      ['Serena', 'Emma', 'Amanda'],
      [],
    ]);
  });

  it(`should add null to an array if 'name' property of an object is null`, () => {
    const objs = [
      { name: 'Ann', age: 30, children: 2 },
      { name: 'Dave', age: 23, children: null },
      { name: 'Helen', age: 28, children: 1 },
    ];
    const result = createList(objs, 'children');

    expect(result).toEqual([2, null, 1]);
  });

  it(`should add undefined to an array if 'name' property of an object equals undefined`, () => {
    const objs = [
      { vehicle: 'bike', wheels: 2 },
      { vehicle: 'car', wheels: 4 },
      { vehicle: 'ship', wheels: undefined },
    ];
    const result = createList(objs, 'wheels');

    expect(result).toEqual([2, 4, undefined]);
  });

  it(`should return an array of undefined equal to objs.length if all objects don't have the 'name' property`, () => {
    const objs = [
      { drink: 'water', volume: 1 },
      { drink: 'cola', volume: 0.33 },
      { drink: 'beer', volume: 0.5 },
    ];
    const result = createList(objs, 'price');

    expect(result).toEqual([undefined, undefined, undefined]);
  });

  it(`should return an empty array if objs is empty`, () => {
    const objs = [];
    const result = createList(objs, 'title');

    expect(result).toEqual([]);
  });
});
