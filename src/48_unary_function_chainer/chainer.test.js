'use strict';

const { chainer } = require('./chainer');

describe(`Function 'chainer':`, () => {
  it(`should be declared`, () => {
    expect(chainer).toBeInstanceOf(Function);
  });

  it(`should return a function`, () => {
    expect(chainer()).toBeInstanceOf(Function);
  });

  it(`should return a result of chained function when only one function is passed`, () => {
    function f1(x) {
      return x * 2;
    }

    expect(chainer([f1])(2)).toEqual(4);
  });

  it(`should return a result of chained function when two functions are passed`, () => {
    function f2(x) {
      return x + 2;
    }

    function f3(x) {
      return Math.pow(x, 2);
    }

    expect(chainer([f2, f3])(2)).toEqual(16);
  });

  it(`should return a result of chained function when the order in which the functions are called differs from the order in which they were declared`, () => {
    function f1(x) {
      return x * 2;
    }

    function f2(x) {
      return x + 2;
    }

    function f3(x) {
      return Math.pow(x, 2);
    }

    expect(chainer([f3, f2, f1])(2)).toEqual(12);
  });

  it(`should return a result of chained function when the passed functions reverse the string`, () => {
    function f4(x) {
      return x.split('').concat().reverse().join('').split(' ');
    }

    function f5(xs) {
      return xs.concat().reverse();
    }

    function f6(xs) {
      return xs.join('_');
    }

    expect(chainer([f4, f5, f6])('Mate Academy')).toEqual('etaM_ymedacA');
  });
});
