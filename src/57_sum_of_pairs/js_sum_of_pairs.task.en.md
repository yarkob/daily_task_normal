Create a function `getPair` that accepts an integer array `nums` and an integer
`sum`. The funciton should return an array of two integers from `nums` that add up to the `sum`.
Return `undefined` if no such pair is found.

Notes:

- `nums` can contain negative integers and duplicates;
- return the first two integers in order of their appearance in the array.

Examples:

```javascript
getPair([11, 3, 7, 5], 10) === [3, 7];
getPair([10, 3, 4, 2, 3, 9], 6) === [4, 2]; // [3, 3] also adds up to 6, but [4, 2] appeared earlier in 'nums', so that's the correct answer
getPair([0, 0, -2, 3], 4) === undefined; // no pair was found
```
