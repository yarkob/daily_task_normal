'use strict';

class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    this.words.push(word);
  }

  search(pattern) {}
}

module.exports = {
  WordDictionary,
};
