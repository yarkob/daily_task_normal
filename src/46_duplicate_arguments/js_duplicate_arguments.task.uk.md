Створи функцію `detectDuplicates`, яка приймає будь-яку кількість аргументів і перевіряє,
чи є серед них дублікати. Поверни `true`, якщо серед аргументів є дублікати, якщо
дублікатів немає - поверни `false`.

Аргументи, що передаються у функцію, можуть бути рядками, числами, булевими значеннями,
`null` та `undefined`.

Приклади:

```js
detectDuplicates(1, 2, 3) === false;
detectDuplicates(1, 2, 'a', 1) === true;
detectDuplicates(true, true, false) === true;
detectDuplicates(undefined, null, 0) === false;
```
