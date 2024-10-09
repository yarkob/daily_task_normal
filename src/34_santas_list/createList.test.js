'use strict';

const { createList } = require('./createList');

describe(`Function 'createList':`, () => {
  it(`should be declared`, () => {
    expect(createList).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = createList(
      ['Alice', 'Bob', 'Charlie'],
      ['Bob', 'Charlie', 'David'],
    );

    expect(result).toBeInstanceOf(Array);
  });

  it(`should work if both lists are identical`, () => {
    expect(
      createList(
        ['Bella', 'Daniel', 'Eva', 'Max'],
        ['Bella', 'Daniel', 'Eva', 'Max'],
      ),
    ).toEqual(['Bella', 'Daniel', 'Eva', 'Max']);
  });

  it(`should work if Santa's list includes names which are not present in the children list`, () => {
    expect(
      createList(
        ['Ann', 'Ariel', 'Fabian', 'Peter', 'Sarah', 'Thomas'],
        ['Ariel', 'Fabian', 'Thomas'],
      ),
    ).toEqual(['Ariel', 'Fabian', 'Thomas']);
  });

  it(`should work if children list includes names which are not present in the Santa's list`, () => {
    expect(
      createList(
        ['Elise', 'Helen', 'Kate', 'Laura'],
        ['Elise', 'Helen', 'Ivy', 'Kate', 'Laura', 'Ned'],
      ),
    ).toEqual(['Elise', 'Helen', 'Kate', 'Laura']);
  });

  it(`should work if lists have some common names and some unique names`, () => {
    expect(
      createList(
        ['Amanda', 'Anthony', 'Bernard', 'Colin', 'Miranda', 'Zach'],
        ['Amalia', 'Anthony', 'Colin', 'Emily', 'Sam', 'Zach'],
      ),
    ).toEqual(['Anthony', 'Colin', 'Zach']);
  });

  it(`should work if lists have don't have common names`, () => {
    expect(
      createList(
        ['Amelie', 'Kate', 'William'],
        ['Hans', 'John', 'Samuel', 'Zeta'],
      ),
    ).toEqual([]);
  });

  it(`should be case-sensitive`, () => {
    expect(
      createList(
        ['James', 'JAmes', 'JamEs', 'james'],
        ['JameS', 'James', 'JamEs', 'JAMES'],
      ),
    ).toEqual(['JamEs', 'James']);
  });

  it(`should add each child only once`, () => {
    expect(
      createList(
        ['Joanna', 'Kira', 'Nathan', 'Oliver'],
        ['Joanna', 'Lora', 'Nathan', 'Nathan', 'Tim'],
      ),
    ).toEqual(['Joanna', 'Nathan']);
  });

  it(`should sort the final list`, () => {
    expect(
      createList(
        ['Wincent', 'Gemma', 'Penny', 'Rene', 'Ilona', 'Emma'],
        ['Emma', 'Penny', 'Gemma', 'Helen'],
      ),
    ).toEqual(['Emma', 'Gemma', 'Penny']);
  });

  it(`should work if Santa's list is empty`, () => {
    expect(createList([], ['Astoria', 'Matthew', 'Ben', 'Donald'])).toEqual([]);
  });

  it(`should work if children list is empty`, () => {
    expect(createList(['Astoria', 'Matthew', 'Ben', 'Donald'], [])).toEqual([]);
  });

  it(`should work if both Santa's list and children list are empty`, () => {
    expect(createList([], [])).toEqual([]);
  });
});
