'use strict';

function extractProperty() {
  /**
   * @param {string} path
   *
   * @returns {string|undefined}
   */

  // eslint-disable-next-line no-extend-native
  Object.prototype.extract = function extract(path) {
    const pathArr = path.split('.');
    let result = this;

    for (let i = 0; i < pathArr.length; i++) {
      if (!pathArr[i]) {
        return;
      }

      result = result[pathArr[i]];
    }

    return result;
  };
}

module.exports = {
  extractProperty,
};
