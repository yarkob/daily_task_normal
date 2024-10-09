'use strict';

/**
 * @param {number[]} nums
 *
 * @returns {number}
 */
function findSingleNum(nums) {
  return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
}

module.exports = {
  findSingleNum,
};
