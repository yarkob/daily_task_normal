'use strict';

/**
 * @param {string[]} santasList
 * @param {string[]} childrenList
 *
 * @returns {string[]}
 */
function createList(santasList, childrenList) {
  return [...new Set(childrenList.filter(item => santasList.includes(item)).sort())];
}

module.exports = {
  createList,
};
