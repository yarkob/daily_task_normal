'use strict';

/**
 * @param {Object} recipe
 * @param {Object} available
 *
 * @returns {number}
 */
function countCakes(recipe, available) {
  let result = Infinity;

  for (const ing in recipe) {
    if(available[ing]) {
      const count = Math.floor(available[ing] / recipe[ing])

      result = Math.min(result, count)
    } else {
      return 0;
    }
  }

  return result;
}

module.exports = {
  countCakes,
};
