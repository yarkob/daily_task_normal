'use strict';

/**
 * @param {number} num
 *
 * @returns {number}
 */
function findLongestGap(num) {
  if (!num) {
    return num;
  }

  const binary = num.toString(2);

  const arr = binary.split('1').map(n => n.length);

  return Math.max(...arr.slice(0, -1));
}

module.exports = {
  findLongestGap,
};
