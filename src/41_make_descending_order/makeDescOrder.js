'use strict';

/**
 * @param {number} num
 *
 * @returns {number}
 */
function makeDescOrder(num) {
  const strNum = `${num}`;

  return +strNum.split('').sort((a, b) => +b - +a).join('');
}

module.exports = {
  makeDescOrder,
};
