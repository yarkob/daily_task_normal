Christmas is coming, and Santa has a long list to go through, to find who deserves presents.

Write a function `createList` that accepts two string arrays `santasList` and `childrenList` and returns an array containing the name of every child from the `childrenList` who also appeared on the `santasList`.

Notes:

- comparison should be case sensitive;
- the result should contain each name only once;
- the result should be sorted by alphabet.

Examples:

```javascript
createList(
  ['Jason', 'Jackson', 'Jordan', 'Johnny'],
  ['Jason', 'Jordan', 'Jennifer'],
) === ['Jason', 'Jordan'];
createList(['JAsoN', 'JaSON', 'jasON'], ['JasoN', 'JAsoN', 'jASon']) ===
  ['JAsoN', 'jASon'];
createList(['John', 'James'], []) === [];
```
