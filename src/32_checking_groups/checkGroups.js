'use strict';

/**
 * @param {string} str
 *
 * @returns {boolean}
 */

const bracesMap = {
  '(': ')',
  '{': '}',
  '[': ']',
}

function checkGroups(str) {
  const stack = [];

  for (const brace of str) {
    if (bracesMap[brace]) {
      stack.push(brace);
    } else {
      const lastBrace = stack.pop() || '';

      if (brace !== bracesMap[lastBrace]) {
        return false
      }
    }
  }

  return !stack.length;
}

module.exports = {
  checkGroups,
};
