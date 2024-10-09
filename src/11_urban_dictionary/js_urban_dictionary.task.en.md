Create a class `WordDictionary` that has the following methods:

- `addWord` which adds a word to the dictionary (`this.words` array);
- `search` which searches for a word or a regular expression string containing
  lowercase letters `a-z` or `.` where `.` can represent any letter.

All given words contain only lowercase letters.

Examples:

```javascript
addWord('bad');
addWord('dad');
addWord('mad');

this.words = ['bad', 'dad', 'mad'];

search('pad') === false;
search('bad') === true;
search('..d') === true;
search('m...') === false;
```
