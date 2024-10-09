Write a function `countDuplicates` that accepts a string `str` and returns the
count of distinct alphabetic characters and numeric digits that occur more than
once in the input string.

Notes:

- the input string contains only alphabets (both uppercase and lowercase) and
  numeric digits;
- function should be case-insensitive.

Examples:

```javascript
countDuplicates('abcde') === 0; // no characters repeat more than once
countDuplicates('aabbcde') === 2; // 'a' and 'b' occur more than once
countDuplicates('aA11') === 2; // 'a' and '1' occur more than once
```
