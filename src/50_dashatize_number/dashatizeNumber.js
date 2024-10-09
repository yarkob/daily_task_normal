'use strict';

/**
 * @param {number} num
 *
 * @returns {string}
 */
function dashatizeNumber(num) {
  if (!Number.isInteger(num)) {
    return 'NaN';
  }

  const numStr = `${Math.abs(num)}`;

  let result = '';

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2) {
      result += `-${numStr[i]}-`;
    } else {
      result += numStr[i];
    }
  }

  if (result[0] === '-') {
    result = result.slice(1);
  }

  if (result[result.length - 1] === '-') {
    result = result.slice(0, result.length - 1);
  }

  return result.replace(/--/g, '-');
}

module.exports = {
  dashatizeNumber,
};
