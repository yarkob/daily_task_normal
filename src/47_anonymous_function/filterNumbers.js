'use strict';

/**
 * @param {[number|function]} objects
 * @param {number[]} nums
 *
 * @returns {number[]}
 */
function filterNumbers(objects, nums) {
  const func = objects.find(item => typeof item === 'function');

  return nums.filter(func);
}

module.exports = {
  filterNumbers,
};
