Write a function `mergeArrays` that accepts two arrays `letters` and `numbers`.

Return the combined array by taking elements from each array in turn.

Consider following:

- The arrays may be of different lengths, and each contains at least one character/digit;
- One array will be of string characters (in lower case, `a-z`) and second of integers (all positive starting at `1`).

Examples:

```javascript
mergeArrays(['a', 'b'], [1, 2]) === ['a', 1, 'b', 2];
mergeArrays(['a', 'b', 'c'], [1]) === ['a', 1, 'b', 'c'];
mergeArrays(['a'], [1, 2, 3]) === ['a', 1, 2, 3];
```
