Два слова є анаграмами одне одного, якщо вони містять однакові літери. Наприклад:

```js
'abba' & ('baab' === true);
'abba' & ('bbaa' === true);
'abba' & ('abbba' === false);
'abba' & ('abca' === false);
```

Напиши функцію `findAnagrams`, яка приймає рядок `word` і масив рядків `words`. Твоя задача — повернути масив всіх анаграм або порожній масив, якщо їх немає.

Приклади:

```js
findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) === ['aabb', 'bbaa'];

findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) ===
  ['carer', 'racer'];

findAnagrams('laser', ['lazing', 'lazy', 'lacer']) === [];
```
