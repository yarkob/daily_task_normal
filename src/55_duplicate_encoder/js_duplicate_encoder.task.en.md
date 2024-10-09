Create a function `encodeDuplicates` that accepts a string `word` and returns a
new string where all characters from `word` are replaced according to the following
rules:

- if a character appears only once in the original string, replace it with `'x'`;
- if a character appears more than once in the original string, replace it with
  `'y'`;
- function should not be case sensitive.

Examples:

```js
encodeDuplicates('get') === 'xxx';
encodeDuplicates('google') === 'yyyyxx';
encodeDuplicates('David') === 'yxxxy';
encodeDuplicates('mama') === 'yyyy';
```
