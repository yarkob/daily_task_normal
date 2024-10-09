'use strict';

const { countCakes } = require('./countCakes');

describe(`Function 'countCakes':`, () => {
  it(`should be declared`, () => {
    expect(countCakes).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof countCakes({}, {})).toBe('number');
  });

  it(`should return the number of cakes when Pete has as many ingredients as the recipe requires`, () => {
    const recipe = {
      flour: 1000,
      sugar: 200,
      apples: 5,
      eggs: 4,
    };

    const available = {
      flour: 1000,
      sugar: 200,
      apples: 5,
      eggs: 4,
    };

    expect(countCakes(recipe, available)).toEqual(1);
  });

  it(`should return the number of cakes when Pete has more ingredients than the recipe requires`, () => {
    const recipe = {
      flour: 560,
      eggs: 4,
      cinnamon: 1,
      sugar: 140,
      grapes: 2,
    };

    const available = {
      flour: 1680,
      sugar: 420,
      apples: 5,
      eggs: 12,
      grapes: 10,
      cinnamon: 10,
      oil: 1,
    };

    expect(countCakes(recipe, available)).toEqual(3);
  });

  it(`should return zero cakes when Pete has less ingredients than the recipe requires`, () => {
    const recipe = {
      flour: 1680,
      sugar: 420,
      apples: 5,
      eggs: 12,
      oil: 1,
      grapes: 10,
      cinnamon: 10,
    };

    const available = {
      flour: 560,
      sugar: 140,
      grapes: 2,
      eggs: 4,
      cinnamon: 1,
    };

    expect(countCakes(recipe, available)).toEqual(0);
  });

  it(`should return zero cakes when Pete does not have at least one ingredient from the recipe`, () => {
    const recipe = {
      flour: 600,
      sugar: 220,
      milk: 2,
    };

    const available = {
      flour: 1000,
      sugar: 400,
    };

    expect(countCakes(recipe, available)).toEqual(0);
  });

  it(`should return zero cakes when Pete has at least one ingredient that is less than the recipe requires`, () => {
    const recipe = {
      flour: 200,
      sugar: 400,
      milk: 2,
      eggs: 2,
    };

    const available = {
      flour: 200,
      sugar: 400,
      milk: 2,
      eggs: 1,
    };

    expect(countCakes(recipe, available)).toEqual(0);
  });
});
