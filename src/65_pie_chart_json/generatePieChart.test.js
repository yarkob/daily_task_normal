'use strict';

const { generatePieChart } = require('./generatePieChart');

describe(`Function 'generatePieChart':`, () => {
  function isJson(item) {
    try {
      JSON.parse(item);
    } catch (e) {
      return false;
    }

    return true;
  }

  it(`should be declared`, () => {
    expect(generatePieChart).toBeInstanceOf(Function);
  });

  it(`should return a JSON`, () => {
    const data = `{
      "books": 4,
      "movies": 5,
      "songs": 6,
      "pictures": 1
    }`;
    const result = generatePieChart(data);

    expect(isJson(result)).toBe(true);
  });

  it(`should return a correct chart for the object with one item`, () => {
    const data = `{
      "laptops": 41
    }`;
    const result = `{"laptops":360}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with two items that are in equal quantities`, () => {
    const data = `{
      "English lessons": 19,
      "German lessons": 19

    }`;
    const result = `{"English lessons":180,"German lessons":180}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with two items that are in different quantities`, () => {
    const data = `{
      "pizza": 8,
      "burger": 15

    }`;
    const result = `{"pizza":125.22,"burger":234.78}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with three items`, () => {
    const data = `{
      "apples": 183,
      "bananas": 134,
      "oranges": 201
    }`;
    const result = `{"apples":127.18,"bananas":93.13,"oranges":139.69}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with four items`, () => {
    const data = `{
      "pancakes": 45,
      "muffins": 98,
      "biscuits": 107,
      "brownies": 72
    }`;
    const result = `{"pancakes":50.31,"muffins":109.57,"biscuits":119.63,"brownies":80.5}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with five items`, () => {
    const data = `{
      "jeans": 103,
      "skirts": 88,
      "T-shirts": 159,
      "dresses": 52,
      "jackets": 94
    }`;
    const result = `{"jeans":74.76,"skirts":63.87,"T-shirts":115.4,"dresses":37.74,"jackets":68.23}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return a correct chart for the object with eight items`, () => {
    const data = `{
      "tea": 283,
      "coffee": 169,
      "cocoa": 74,
      "water": 112,
      "coke": 225,
      "sprite": 138,
      "fanta": 142,
      "milkshake": 56
    }`;
    const result = `{"tea":84.97,"coffee":50.74,"cocoa":22.22,"water":33.63,"coke":67.56,"sprite":41.43,"fanta":42.64,"milkshake":16.81}`;

    expect(generatePieChart(data)).toBe(result);
  });

  it(`should return an empty JSON if data is empty`, () => {
    expect(generatePieChart(`{}`)).toBe(`{}`);
  });
});
