Напиши функцію `containRotations`, яка приймає рядок `str` і масив з рядками `arr`.

Поверни `true`, якщо всі обертання `str` включені в масив `arr`, інакше поверни `false`.

Врахуй, що:

- Для `str === ''` не існує обертань в будь-якому масиві `arr`, тому поверни `true` для цього випадку;
- Функція має враховувати регістр;
- Рядок `str` може містити букви, пробіли, цифри та спеціальні символи.

Приклади:

```javascript
containRotations('', []) === true;
containRotations('abc', []) === false;
containRotations('stRing', [
  'stRing',
  'gstRin',
  'ngstRi',
  'ingstR',
  'Ringst',
  'TwshnUh',
  'tRings',
]) === true;
containRotations('Word', ['Word', 'dWor', 'rdoW', 'DroW', 'rrWd']) === false; // всі обертання рядка 'Word' - ['Word', 'ordW', 'rdWo', 'dWor']
```
