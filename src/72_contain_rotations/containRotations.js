'use strict';

/**
 * @param {string} str
 * @param {string[]} arr
 *
 * @returns {boolean}
 */
function containRotations(str, arr) {
  if (!str) {
    return true;
  }

  let current = str;

  const checkArr = [];

  for (let i = 0; i < str.length; i++) {
    checkArr.push(current);
    current = current.slice(str.length - 1) + current.slice(0, str.length - 1);
  }

  for (let i = 0; i < checkArr.length; i++) {
    if (!arr.includes(checkArr[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  containRotations,
};
