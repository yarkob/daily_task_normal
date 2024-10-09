'use strict';

const { extractProperty } = require('./extractProperty');

extractProperty();

describe('Function `extractProperty`:', () => {
  const object = {
    person: {
      name: 'Helen',
      data: {
        hometown: 'Los Angeles',
        birthdate: '07.06.1983',
        bio: {
          funFact: 'I like travelling!',
        },
      },
    },
  };

  it(`should be declared`, () => {
    expect(Object.prototype.extract).toBeInstanceOf(Function);
  });

  it(`should return the string with name if path = 'person.name'`, () => {
    const result = object.extract('person.name');

    expect(result).toBe('Helen');
  });

  it(`should return the string with hometown if path = 'person.data.hometown'`, () => {
    const result = object.extract('person.data.hometown');

    expect(result).toBe('Los Angeles');
  });

  it(`should return the string with birthdate if path = 'person.data.birthdate'`, () => {
    const result = object.extract('person.data.birthdate');

    expect(result).toBe('07.06.1983');
  });

  it(`should return the string with fun fact if path = 'person.data.bio.funFact'`, () => {
    const result = object.extract('person.data.bio.funFact');

    expect(result).toBe('I like travelling!');
  });

  it(`should return undefined if the asked property doesn't exist in the object`, () => {
    const result = object.extract('person.data.bio.age');

    expect(result).toBe(undefined);
  });
});
