'use strict';

const { getHumanAge } = require('./getHumanAge');

describe(`getHumanAge`, () => {
  it(`should be declared`, () => {
    expect(getHumanAge).toBeInstanceOf(Function);
  });

  it(`should give 0s if animals are almost 1 human year old`, () => {
    expect(getHumanAge(14, 14)).toEqual([0, 0]);
  });

  it(`should give 1s if animals are exactly 1 human year old`, () => {
    expect(getHumanAge(15, 15)).toEqual([1, 1]);
  });

  it(`should give 1s if animals are almost 2 human years old`, () => {
    expect(getHumanAge(20, 22)).toEqual([1, 1]);
  });

  it(`should give 2s if animals are exactly 2 human years old`, () => {
    expect(getHumanAge(24, 24)).toEqual([2, 2]);
  });

  it(`should work if cat and dog are between 24 and 28 years old`, () => {
    expect(getHumanAge(27, 25)).toEqual([2, 2]);
  });

  it(`should work if cat and dog are 28 years old`, () => {
    expect(getHumanAge(28, 28)).toEqual([3, 2]);
  });

  it(`should work if cat is 28 years old and dog is 29 years old`, () => {
    expect(getHumanAge(28, 29)).toEqual([3, 3]);
  });

  it(`should work if cat and dog are older than 28 and 29 years old respectively`, () => {
    expect(getHumanAge(33, 45)).toEqual([4, 6]);
  });
});
