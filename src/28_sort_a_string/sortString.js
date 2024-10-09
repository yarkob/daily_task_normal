'use strict';

/**
 * @param {string} words
 *
 * @returns {string}
 */
function sortString(words) {
  return words
    .split(' ')
    .sort((a, b) => {
      const aNum = a.split('').find(char => /^\d+$/.test(char));
      const bNum = b.split('').find(char => /^\d+$/.test(char));

      return +aNum - +bNum;
    })
    .join(' ');
}

module.exports = {
  sortString,
};
