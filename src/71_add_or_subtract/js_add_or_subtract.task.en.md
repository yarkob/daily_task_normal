Write a function `calcString` that accepts a string `calculation` and does addition and subtraction of the integers in a given string. For example, `1plus2minus3` means `1 + 2 - 3` and equals `0`.

The function returns a string as well.

The input contains at least one integer.

Examples:

```javascript
calcString('1plus2plus3plus4') === '10'; // 1 + 2 + 3 + 4 = 10
calcString('8minus5') === '3'; // 8 - 5 = 3
calcString('12plus8minus13') === '7'; // 12 + 8 - 13 = 7
```
