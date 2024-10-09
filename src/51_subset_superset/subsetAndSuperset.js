'use strict';

/**
 * @param {Set} subset
 * @param {Set} superset
 *
 * @returns {boolean}
 */
function isSubset(subset, superset) {
  const a = [...subset];
  const b = [...superset];

  return a.every(item => b.includes(item));
}

/**
 * @param {Set} superset
 * @param {Set} subset
 *
 * @returns {boolean}
 */
function isSuperset(superset, subset) {
  const a = [...subset];
  const b = [...superset];

  return a.every(item => b.includes(item));
}

module.exports = {
  isSuperset,
  isSubset,
};
