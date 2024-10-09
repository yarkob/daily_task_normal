'use strict';

/**
 * @param {number[]} numbers
 * @param {number} sum
 *
 * @returns {number[] | undefined}
 */
function getPair(numbers, sum) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

module.exports = {
  getPair,
};
