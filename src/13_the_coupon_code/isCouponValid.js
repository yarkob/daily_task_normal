'use strict';

/**
 * @param {string|number} enteredCode
 * @param {string|number} correctCode
 * @param {string} currentDate
 * @param {string} expirationDate
 *
 * @returns {boolean}
 */
function isCouponValid(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode;
}

module.exports = {
  isCouponValid,
};
