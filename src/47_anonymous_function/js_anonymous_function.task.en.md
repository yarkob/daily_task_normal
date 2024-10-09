Write a function `filterNumbers` that finds a function in the array of numbers and uses this function to filter another array.

The `filterNumbers` function accepts two arrays: `objects` and `nums`.
The `objects` array consists of numbers and exactly one function (filter), which you have to find.
The `nums` array consists of numbers that you have to filter using the detected function from the `objects` array.

The `filterNumbers` returns the filtered version of the `nums` array (filtered on the basis of the detected function from the `objects` array).

Examples:

```javascript
filterNumbers([(a) => a % 2 === 0, 9, 3, 1, 0], [1, 2, 3, 4]); // [2, 4]
filterNumbers([6, 2, 4, (a) => a > 5, 5, -3], [4, 5, 6, 7, 8]); // [6, 7, 8]
filterNumbers([(-4, 3, 10, -11, (a) => a < 0)], [2, 0, 8, 9, 12]); // []
```
