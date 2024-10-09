Two words are anagrams of each other if they both contain the same letters. For example:

```js
'abba' & ('baab' === true);
'abba' & ('bbaa' === true);
'abba' & ('abbba' === false);
'abba' & ('abca' === false);
```

Write a function `findAnagrams` that accepts a string `word` and an array of strings `words`. You should return an array of all the anagrams or an empty array if there are none.

Examples:

```js
findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) === ['aabb', 'bbaa'];

findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) ===
  ['carer', 'racer'];

findAnagrams('laser', ['lazing', 'lazy', 'lacer']) === [];
```
