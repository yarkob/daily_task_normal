'use strict';

/**
 * @param {any} val
 *
 * @returns {string}
 */
function getType(val) {
  const typeOf = typeof val;

  if (typeOf === 'undefined') return 'Undefined';
  if (typeOf === 'object' && !val) return 'Null';
  if (typeOf === 'boolean') return 'Boolean';
  if (typeOf === 'function') return 'Function';
  if (typeOf === 'string' && !/\d/.test(val)) return 'String';
  if (typeOf === 'string' && /\d/.test(val)) return 'String Numeric';

  const type = val.constructor.name;

  if (typeOf === 'object' && !Array.isArray(val) && type === 'Object') return 'Object';

  if (typeOf === 'number') {
    if (isNaN(val)) return 'Number NaN';
    if (!Number.isFinite(val)) return 'Number Infinite';
    if (val % 1) return 'Number Float';

    return 'Number Integer';
  }
  if (Array.isArray(val)) return 'Array';

  return type;
}

module.exports = {
  getType,
};
