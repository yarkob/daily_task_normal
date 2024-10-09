'use strict';

/**
 * @param {Array.<Object>} objs
 * @param {string} name
 *
 * @returns {any[]}
 */
function createList(objs, name) {
  return objs.reduce((acc, obj) => {
      acc.push(obj[name]);

      return acc;
  }, []);
}

module.exports = {
  createList,
};
