Write a function `divideList` that accepts an array of strings `list` and returns
all the ways to divide `list` into two non-empty parts.

Notes:

- `list` contains at least two non-empty strings;
- each part will be a string where elements of an array are separated by space;
- elements of a part must be in the same order as in the original array.

Examples:

```js
divideList(['milk', 'butter']) === [['milk', 'butter']];
divideList(['car', 'train', 'airplane']) ===
  [
    ['car', 'train airplane'],
    ['car train', 'airplane'],
  ];
divideList(['onion', 'garlic', 'tomato', 'corn']) ===
  [
    ['onion', 'garlic tomato corn'],
    ['onion garlic', 'tomato corn'],
    ['onion garlic tomato', 'corn'],
  ];
```
