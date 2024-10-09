'use strict';

const { countAddresses } = require('./countAddresses');

describe(`Function 'countAddresses':`, () => {
  it(`should be declared`, () => {
    expect(countAddresses).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const addresses = [
      {
        house: 1,
        street: 'Wall St.',
        city: 'New York',
        state: 'NY',
      },
      {
        house: 2,
        street: 'Door St.',
        city: 'San Francisco',
        state: 'CA',
      },
    ];

    expect(countAddresses(addresses)).toBeInstanceOf(Array);
  });

  it(`should return an array where each object has the properties 'state' and 'count'`, () => {
    const addresses = [
      {
        house: 1,
        street: 'Wall St.',
        city: 'New York',
        state: 'NY',
      },
      {
        house: 2,
        street: 'Door St.',
        city: 'San Francisco',
        state: 'CA',
      },
    ];

    const result = countAddresses(addresses);

    expect(result[0]).toHaveProperty('state');
    expect(result[0]).toHaveProperty('count');
  });

  it(`should return an array in order of appearences of the states`, () => {
    const addresses = [
      {
        house: 1,
        street: 'Wall St.',
        city: 'New York',
        state: 'NY',
      },
      {
        house: 2,
        street: 'Door St.',
        city: 'San Francisco',
        state: 'CA',
      },
    ];

    const result = countAddresses(addresses);

    expect(result[0].state).toBe('NY');
    expect(result[1].state).toBe('CA');
  });

  it(`should return an array with one object if the input array contains only one object`, () => {
    const addresses = [
      {
        house: 14,
        street: 'Stone St.',
        city: 'Detroit',
        state: 'MI',
      },
    ];

    const result = [
      {
        state: 'MI',
        count: 1,
      },
    ];

    expect(countAddresses(addresses)).toEqual(result);
  });

  it(`should return an array with the same number of objects as in the input array if all addresses are from different states`, () => {
    const addresses = [
      {
        house: 6,
        street: 'Apple St.',
        city: 'Houston',
        state: 'TX',
      },
      {
        house: 8,
        street: 'Pear St.',
        city: 'Dallas',
        state: 'TX',
      },
      {
        house: 27,
        street: 'Apricot St.',
        city: 'San Antonio',
        state: 'TX',
      },
      {
        house: 11,
        street: 'Grape St.',
        city: 'Austin',
        state: 'TX',
      },
    ];

    const result = [
      {
        state: 'TX',
        count: 4,
      },
    ];

    expect(countAddresses(addresses)).toEqual(result);
  });

  it(`should return an array with the correct numbers of addresses for each state`, () => {
    const addresses = [
      {
        house: 4,
        street: 'Miller St.',
        city: 'Rogers',
        state: 'AR',
      },
      {
        house: 90,
        street: 'Carpenter St.',
        city: 'Jefferson',
        state: 'AR',
      },
      {
        house: 42,
        street: 'Baker St.',
        city: 'Portland',
        state: 'OR',
      },
      {
        house: 76,
        street: 'Carter St.',
        city: 'Columbus',
        state: 'OH',
      },
      {
        house: 114,
        street: 'Smith St.',
        city: 'Conway',
        state: 'AR',
      },
      {
        house: 26,
        street: 'Potter St.',
        city: 'Salem',
        state: 'OR',
      },
      {
        house: 8,
        street: 'Taylor St.',
        city: 'Springfield',
        state: 'OR',
      },
    ];

    const result = [
      {
        state: 'AR',
        count: 3,
      },
      {
        state: 'OR',
        count: 3,
      },
      {
        state: 'OH',
        count: 1,
      },
    ];

    expect(countAddresses(addresses)).toEqual(result);
  });

  it(`should throw an error if an object in 'addresses' doesn't have 'state' property`, () => {
    const addresses = [
      {
        house: 57,
        street: 'Carrot St.',
        city: 'Fromberg',
        state: 'MT',
      },
      {
        house: 32,
        street: 'Cabbage St.',
        city: 'Dutton',
      },
    ];

    expect(() => {
      countAddresses(addresses);
    }).toThrowError('Wrong address');
  });
});
