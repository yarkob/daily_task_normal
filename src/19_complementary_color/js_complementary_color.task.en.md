Create a function `getComplementaryColor` that accepts a string `hexColor` representing
a hex-color and returns the string representing its complementary color.

You can read more about hex-colors on [w3schools](http://www.w3schools.com/colors/colors_picker.asp) and [Wikipedia](https://en.wikipedia.org/wiki/Web_colors).

`hexColor` is a string with a hex value (case-ignored with chars `0-9` or `A-F`)
without hash-char `#`.

Note: if `hexColor` has a length less than 6 characters, rest is filled by zeros:

```
'bc9' => '000bc9'
'' => '000000'
```

The result of the function is the upper-cased string containing the hash-char `#`
and the complementary color.

Complementary color is some color which gives completely white color (`FFFFFF`)
in sum with entered one:

```
'#000A23' + '#FFF5DC' = '#FFFFFF'
```

If `hexColor` is invalid: length is 7 characters or greater, it has non-hexadecimal
characters or non-string type, then an error should be thrown (you can read about the throw statements [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)).

Examples:

```javascript
getComplementaryColor('01fD08') === '#FE02F7';
getComplementaryColor('') === '#FFFFFF'; // '' becomes '000000'
getComplementaryColor('a23') === '#FFF5DC'; // 'a23' becomes '000a23'
getComplementaryColor('40fdEd2'); // throws an error (incorrect string length)
getComplementaryColor('76ecLL'); // throws an error (non-hex chars)
getComplementaryColor(293942); // throws an error (non-string type)
```
