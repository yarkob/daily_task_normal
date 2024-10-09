Write a function `reverseChars` that accepts a string `str` and a positive integer `k` and reverses the first `k` characters for every `2k` characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than `k` characters, then reverse the first `k` characters and left the other as original.

Examples:

```js
reverseChars('abcdefg', 2) === 'bacdfeg';
reverseChars('abcdabcdabcd', 3) === 'cbadabadcbcd';
reverseChars('qwerty', 6) === 'ytrewq';
reverseChars('zxcv', 1) === 'zxcv';
```
