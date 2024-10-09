Create a function `formatNumber` that accepts a non-empty string `template` and
an optional parameter `number` - an integer to be formatted according to the `template`.

For example:

```javascript
template = 'xxxx xxxx xx';
number = 1122334455;

formatNumber = '1122 3344 55';
```

A few rules:

- the template can contain letters, other numbers, special characters and spaces;
- you need to replace only alphabetical characters (both lower- and uppercase);
- if the number is not present, use the digits `1234567890` to replace the letters.
- if the given or default number is shorter than the template, repeat it to replace
  all the letters;

Some more examples:

```javascript
formatNumber('xxx xxxxx xx') === '123 45678 90'; // 1234567890 is a default number
formatNumber('+555 aaaa bbbb', 18031978) === '+555 1803 1978'; // numbers and special characters in template should not be replaced
formatNumber('xxx yyy zzz', 4567) === '456 745 674'; // if number is shorter than the template, repeat it to replace all the letters
```
