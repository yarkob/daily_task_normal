'use strict';

/**
 * @param {number[]} numbers
 *
 * @returns {number}
 */
function countPairs(numbers) {


  return numbers.reduce((acc, num, idx) => {
    const pair = numbers.slice(idx + 1).findIndex(n => n === num);

    if (!pair) {
      return acc;
    }

    // acc += 1;

    numbers.splice(pair, 1);

    return acc;
  }, 0);
}

module.exports = {
  countPairs,
};
