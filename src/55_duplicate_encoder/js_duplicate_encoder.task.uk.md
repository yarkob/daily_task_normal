Створи функцію `encodeDuplicates`, яка приймає рядок `word` і повертає новий
рядок, де всі символи з `word` замінені відповідно до таких правил:

- якщо символ з'являється лише один раз у вхідному рядку, заміни його на `'x'`;
- якщо символ з'являється кілька разів у вхідному рядку, заміни його на `'y'`;
- функція повинна ігнорувати регістр літер.

Приклади:

```js
encodeDuplicates('get') === 'xxx';
encodeDuplicates('google') === 'yyyyxx';
encodeDuplicates('David') === 'yxxxy';
encodeDuplicates('mama') === 'yyyy';
```
