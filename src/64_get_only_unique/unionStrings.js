'use strict';

/**
 * @param {string} sentence1
 * @param {string} sentence2
 *
 * @returns {string}
 */
function unionStrings(sentence1, sentence2) {
  const united = sentence1 + sentence2
  const split = united.split('');
  const unique = [ ...new Set(split) ];
  const sorted = unique.sort((a, b) => a.localeCompare(b));

  return sorted.join('');
}

module.exports = {
  unionStrings,
};
