'use strict';

/**
 * @param {numbers[]} nums
 *
 * @returns {number}
 */
function multiplyNums(nums) {
  if (!nums.length) {
    return 1;
  }

  const x = nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
  const a = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
  const y = nums.find(num => !a.includes(num));

  return x * x * y;
}

module.exports = {
  multiplyNums,
};
