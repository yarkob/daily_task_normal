Create a function `detectDuplicates` that accepts any number of arguments and checks
whether there are any duplicates. Return `true` if any arguments are duplicates,
otherwise, return `false`.

The arguments passed to the function can be strings, numbers, booleans, `null` and
`undefined`.

Examples:

```js
detectDuplicates(1, 2, 3) === false;
detectDuplicates(1, 2, 'a', 1) === true;
detectDuplicates(true, true, false) === true;
detectDuplicates(undefined, null, 0) === false;
```
