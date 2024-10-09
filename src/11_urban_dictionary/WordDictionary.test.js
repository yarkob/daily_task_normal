'use strict';

const { WordDictionary } = require('./WordDictionary');

describe('', () => {
  describe(`Class 'WordDictionary'`, () => {
    it(`should be declared`, () => {
      expect(WordDictionary).toBeInstanceOf(Function);
    });

    it(`can be used as a constructor`, () => {
      const dictionary = new WordDictionary();

      expect(dictionary).toBeInstanceOf(WordDictionary);
    });

    it(`should have an 'addWord' method`, () => {
      expect(WordDictionary.prototype.addWord).toBeInstanceOf(Function);
    });

    it(`should have a 'search' method`, () => {
      expect(WordDictionary.prototype.search).toBeInstanceOf(Function);
    });
  });

  describe(`Method 'addWord'`, () => {
    it(`should add one word to the dictionary`, () => {
      const dictionary = new WordDictionary();

      dictionary.addWord('test');

      expect(dictionary.words).toEqual(['test']);
    });

    it(`should add several words to the dictionary if called several times`, () => {
      const dictionary = new WordDictionary();

      dictionary.addWord('apple');
      dictionary.addWord('banana');
      dictionary.addWord('orange');

      expect(dictionary.words).toEqual(['apple', 'banana', 'orange']);
    });

    it(`should not add anything to the dictionary if an empty string is passed`, () => {
      const dictionary = new WordDictionary();

      dictionary.addWord('');

      expect(dictionary.words).toEqual([]);
    });

    it(`should not add anything to the dictionary if called without arguments`, () => {
      const dictionary = new WordDictionary();

      dictionary.addWord();

      expect(dictionary.words).toEqual([]);
    });
  });

  describe(`Method 'search'`, () => {
    it(`should return a boolean`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('a', 'b', 'c', 'd', 'e');

      expect(typeof dictionary.search('a')).toBe('boolean');
    });

    it(`should return true if the whole word is found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('js', 'python', 'c', 'java', 'kotlin', 'php');

      expect(dictionary.search('java')).toBe(true);
    });

    it(`should return true if the word with missing letters is found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('sugar', 'salt', 'pepper');

      expect(dictionary.search('..lt')).toBe(true);
    });

    it(`should return true if the word with all missing letters is found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('book', 'movie', 'theater', 'cinema');

      expect(dictionary.search('.......')).toBe(true);
    });

    it(`should return false if the whole word is not found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('camel', 'horse', 'donkey');

      expect(dictionary.search('bull')).toBe(false);
    });

    it(`should return false if the word with missing letters is not found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push(
        'strawberry',
        'raspberry',
        'blackberry',
        'blueberry',
      );

      expect(dictionary.search('s...berry')).toBe(false);
    });

    it(`should return false if the word with all missing letters is not found`, () => {
      const dictionary = new WordDictionary();

      dictionary.words.push('coffee', 'tea', 'milk', 'water', 'coke');

      expect(dictionary.search('.......')).toBe(false);
    });
  });
});
