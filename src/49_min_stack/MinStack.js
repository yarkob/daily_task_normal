'use strict';

function MinStack() {
  this.storage = [];
}

/**
 * @param {number} val
 *
 * @returns {void}
 */
MinStack.prototype.push = function (val) {
  this.push(val);
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function () {
  this.pop();
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function () {
  return this[this.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min(...this);
};

module.exports = {
  MinStack,
};
