Write a function `findMaximumProduct` that accepts an array `nums` with integers, and a number `size`. `size` can be equal or greater than `0`.

Find the product of the maximal numbers. If `size = 0`, return `1`. The length of an array is at least 3 elements and numbers could be a mixture of positives, negatives and zeroes.

If the number `size` is greater than or equal to the length of the array, return the product of all numbers in the array.

Examples:

```js
findMaximumProduct([10, 3, -1, -27], 3) === -30;
// Since the size = 3, then the subsequence of size 3
// whose gives product of maxima is 10 * 3 * -1 = -30;

findMaximumProduct([10, 8, 3, 2, 1, 4, 10], 5) === 9600;
// Since the size = 5, then the subsequence of size 5
// whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600;
```
