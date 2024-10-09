Create a function `findLongestGap` that accepts a non-negative integer `num` and returns
the length of the longest binary gap in the binary representation of the `num`.
A binary gap is a sequence of zeros that is surrounded by ones at both ends.

For example:

- `9` has binary representation `1001` and contains a binary gap of length `2`.
- `529` has binary representation `1000010001` and contains two binary gaps: one
  of length `4` and one of length `3`.
- `20` has binary representation `10100` and contains one binary gap of length 1 (`00`
  is not a binary gap because it is not surrounded by ones at the right).
- `15` has binary representation `1111` and doesn't contain binary gaps.

Note: the function should return `0` if `num` doesn't contain a binary gap.

Examples:

```javascript
findLongestGap(9) === 2;
findLongestGap(529) === 4;
findLongestGap(20) === 1;
findLongestGap(15) === 0;
```
