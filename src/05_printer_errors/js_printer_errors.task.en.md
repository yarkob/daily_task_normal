In a factory, a printer prints labels for boxes. For one kind of boxes the printer
has to use colors which are named with letters from `a` to `m`. Sometimes there
are problems and a string with non-existing colors (with letters not from `a` to `m`)
can be passed to the printer.

Create a function `getRatio` that accepts a string `colors` representing the colors
for the printer and returns the error rate of string. The result should be a string
representing a ratio whose numerator is the number of errors and the denominator
is the length of the string.

Note: the string `colors` contains only letters from `a` to `z`.

Examples:

```js
getRatio('abcdefghijklm') === '0/13'; // all letters are from 'a' to 'm' are treated as valid
getRatio('abcdnopq') === '4/8'; // letters 'n', 'o', 'p' and 'q' are treated as errors
getRatio('www') === '3/3'; // letter 'w' is treated as error
```
