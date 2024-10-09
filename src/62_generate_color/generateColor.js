'use strict';

/**
 * @returns {string}
 */
function generateColor() {
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  let result = '#';

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16)

    result += colors[random];
  }

  return result;
}

module.exports = {
  generateColor,
};
