Write a function `generateSequence` that takes a non-negative integer `num` and
a value of any type `pattern`. The function should return an array of length
`num` where all elements are equal to `pattern`.

If `pattern` is a function, then the elements of the array should be the results
of calling `pattern` with index as an argument.

Examples:

```javascript
generateSequence(3, 4) === [4, 4, 4];
generateSequence(5, {}) === [{}, {}, {}, {}, {}];
generateSequence(2, 's') === ['s', 's'];
generateSequence(5, (i) => i * 3) === [0, 3, 6, 9, 12];
generateSequence(3, (i) => i + 10) === [10, 11, 12];
```
