Write a function `getLast` that accepts an input `list` and returns the last element of the given argument(s).

If `list` is an array, return its last element.
If `list` is a string, return its last character.
If `list` is a list of arguments, return the last argument.

Examples:

```javascript
getLast([3, 5, 7, 9, 11]) === 11; // last element of the array
getLast('abcdefg') === 'g'; // last character of the string
getLast(2, 'f', 10, -23, 7) === 7; // last argument of the list
```
