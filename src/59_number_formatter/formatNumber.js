'use strict';

/**
 * @param {string} template
 * @param {number} number
 *
 * @returns {string}
 */
function formatNumber(template, number) {
  const regex = /[A-Za-z]/g;
  const strNum = String(number);

  return template
    .split('')
    .map((char, idx) => {
      if (!regex.test(char)) {
        return strNum[idx];
      } else {
        return char;
      }
    })
    .join('')
}

module.exports = {
  formatNumber,
};
