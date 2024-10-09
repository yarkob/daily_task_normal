'use strict';

/**
 * @param {number[]} start
 * @param {number[]} start
 *
 * @returns {number[]}
 */
function getTribonacciSequence(start, n) {
  if (start.length < n) {
    return start.slice(n);
  }

  const result = start;

  for (let i = start.length - 1; i < n - start.length; i++) {
    const num = start[i - 2] + start[i - 1] +  start[i];

    result.push(num);
  }

  return result;
}

module.exports = {
  getTribonacciSequence,
};
