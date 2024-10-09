A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer `x` is an integer that can divide `x` evenly.

Write a function `isPerfectNum` that accepts an integer `num` and returns `true` if `num` is a perfect number, otherwise returns `false`.

Examples:

```javascript
isPerfectNum(6) === true;
// 6 = 1 + 2 + 3,
// 1, 2, 3 are all divisors of 6.

isPerfectNum(28) === true;
// 28 = 1 + 2 + 4 + 7 + 14,
// 1, 2, 4, 7, and 14 are all divisors of 28.

isPerfectNum(2) === false;
```
