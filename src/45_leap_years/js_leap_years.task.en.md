Write a function `isLeapYear` that accepts a positive integer `year` and determines whether a given year is a leap year or not.

The rules are the following:

- Years divisible by `4` are leap years;
- Years divisible by `100` are not leap years;
- Years divisible by `400` are leap years.

Return `true` if a given year is a leap year, otherwise, return `false`.

Examples:

```javascript
isLeapYear(1884) === true; // 1884 is divisible by 4
isLeapYear(1700) === false; // 1700 is divisible by 100
isLeapYear(2000) === true; // 2000 is divisible by 400
isLeapYear(1925) === false; // 1925 is not divisible by 4
```
