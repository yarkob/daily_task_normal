Write a function `containRotations` that accepts a string `str` and an array with strings `arr`.

Return `true` if all rotations of `str` are included in `arr`, otherwise return `false`.

Consider following:

- There are no rotations of `str === ''` in any `arr`, return `true` for this case;
- The function must be case-sensitive;
- String `str` can contain letters, spaces, numbers and special symbols.

Examples:

```javascript
containRotations('', []) === true;
containRotations('abc', []) === false;
containRotations('stR!ng', [
  'stR!ng',
  'gstR!n',
  'ngstR!',
  '!ngstR',
  'R!ngst',
  'TwshnUh',
  'tR!ngs',
]) === true;
containRotations('Word', ['Word', 'dWor', 'rdoW', 'DroW', 'rrWd']) === false; // all rotations of 'Word' are ['Word', 'ordW', 'rdWo', 'dWor']
```
