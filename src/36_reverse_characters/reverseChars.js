'use strict';

/**
 * @param {string} str
 * @param {number} k
 *
 * @returns {string}
 */
function reverseChars(str, k) {
  if (k === 1) {
    return str;
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str.slice(i, i + k).split('').reverse().join('');

    i += k;
  }

  return result;
}

module.exports = {
  reverseChars,
};
