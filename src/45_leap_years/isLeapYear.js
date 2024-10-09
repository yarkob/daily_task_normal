'use strict';

/**
 * @param {number} year
 *
 * @returns {boolean}
 */
function isLeapYear(year) {
  if ((year % 400) === 0) {
    return true;
  }

  if ((year % 100) === 0) {
    return false;
  }

  return (year % 400 % 100 % 4) === 0
}

module.exports = {
  isLeapYear,
};
