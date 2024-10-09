Write a function `sortString` that accepts a string `words` where each word contains
a single number. The function should place the words in the result string according
to the numbers the words contain.

Notes:

- numbers can be from 1 to 9, so 1 will be the first word (not 0);
- the words in the input string contain only valid consecutive numbers.

If the input string is empty, return an empty string.

Examples:

```javascript
sortString('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est';
sortString('4of Fo1r pe6ople g3ood th5e the2') ===
  'Fo1r the2 g3ood 4of th5e pe6ople';
sortString('') === '';
```
