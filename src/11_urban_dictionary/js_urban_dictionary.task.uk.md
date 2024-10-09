Створи клас `WordDictionary`, який має такі методи:

- `addWord`, що додає слово до словника (масив `this.words`);
- `search`, який шукає слово або рядок регулярного виразу, що містить малі
  літери `a-z` або `.`, де `.` може представляти будь-яку літеру.

Усі передані слова містять лише малі літери.

Приклади:

```javascript
addWord('bad');
addWord('dad');
addWord('mad');

this.words = ['bad', 'dad', 'mad'];

search('pad') === false;
search('bad') === true;
search('..d') === true;
search('m...') === false;
```
