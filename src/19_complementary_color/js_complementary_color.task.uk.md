Створи функцію `getComplementaryColor`, яка приймає рядок `hexColor`, що представляє
колір HTML і повертає рядок, що представляє його комплементарний колір.

Про кольори HTML можна прочитати на [w3schools](http://www.w3schools.com/colors/colors_picker.asp) та [Вікіпедії](https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D0%B8_HTML).

`hexColor` - рядок із шістнадцятковим значенням (із символами `0-9` або `A-F` в
будь-якому регістрі) без хеш-символу `#`.

Примітка: якщо довжина `hexColor` менше 6 символів, решта заповнюється нулями:

```
'bc9' => '000bc9'
'' => '000000'
```

Результатом функції є рядок у верхньому регістрі, що містить хеш-символ `#` і
комплементарний колір.

Комплементарний колір - це колір, який в сумі з введеним дає повністю білий колір
(`FFFFFF`):

```
'#000A23' + '#FFF5DC' = '#FFFFFF'
```

Якщо `hexColor` не є валідним: довжина 7 символів або більше, містить не шістнадцяткові
символи або не є рядком, - функція повинна видати помилку (почитати про throw-вирази можна [тут](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw)).

Приклади:

```javascript
getComplementaryColor('01fD08') === '#FE02F7';
getComplementaryColor('') === '#FFFFFF'; // '' стає '000000'
getComplementaryColor('a23') === '#FFF5DC'; // 'a23' стає '000a23'
getComplementaryColor('40fdEd2'); // видає помилку (неправильна довжина рядка)
getComplementaryColor('76ecLL'); // видає помилку (не шістнадцяткові символи)
getComplementaryColor(293942); // видає помилку (не є рядком)
```
