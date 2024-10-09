'use strict';

/**
 * @param {number[] | string | ...number} list
 *
 * @returns {[] | string | number}
 */
function getLast(...list) {
  if (list.length === 1) {
    const el = list[0];

    if (!el) {
      return '';
    }

    if (Array.isArray(el) && !el.length) {
      return [];
    }

    if (typeof el === 'number') {
      return el;
    }

    return el[el.length - 1];
  } else {
    return list[list.length - 1];
  }
}

module.exports = {
  getLast,
};
