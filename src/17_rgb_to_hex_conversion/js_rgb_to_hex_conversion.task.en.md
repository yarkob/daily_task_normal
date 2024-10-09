Create a function `rgbToHex` that accepts three parameters `r`, `g` and `b` representing
the RGB decimal value. The function should return a string with a hexadecimal
representation of these values.

Notes:

- valid decimal values for RGB are `0-255`;
- values that fall out of that range must be rounded to the closest valid value;
- the result should always be 6 characters long.
- letters in the result should be uppercased.

Examples:

```js
rgbToHex(255, 255, 255) === 'FFFFFF';
rgbToHex(0, 0, 0) === '000000'; // the result should always be 6 characters long, so '000' should become '000000'
rgbToHex(9, 158, 160) === '099EA0'; // the result should always be 6 characters long, so '9' should become '09'
rgbToHex(275, 105, 180) === 'FF69B4'; // if value is greater than 255, it should be rounded to 255
rgbToHex(128, 128, -128) === '808000'; // if value is less than 0, it should be rounded to 0
```
