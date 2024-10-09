Create a function `dashatizeNumber` that accepts a number `num` and adds dashes
to it. The function should return a string.

Here are the rules:

- if `num` is an integer, add dashes (`'-'`) before and after each odd integer of
  the `num`;
- do not begin or end the string with a dash;
- if `num` is negative, then the minus should be removed;
- if `num` is not an integer, return a string `'NaN'`.

Examples:

```js
dashatizeNumber(274) === '2-7-4';
dashatizeNumber(5311) === '5-3-1-1';
dashatizeNumber(86320) === '86-3-20';
dashatizeNumber(-6) === '6';
dashatizeNumber(5.7) === 'NaN';
```
