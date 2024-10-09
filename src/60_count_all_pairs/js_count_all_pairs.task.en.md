Write a function `countPairs` that accepts an array of integers `nums`. The numbers can be positives, negatives and zeros.

You need to count all pairs in the `nums` and return their count.

Notes:

- return 0 if array is empty or consists of only one number;
- if there are more pairs of a certain number, count each pair only once.

Examples:

```javascript
countPairs([1]) === 0;
countPairs([0, 0, 0, 0]) === 2;
countPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4;
```
