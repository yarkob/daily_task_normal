Write a function `createList` that accepts an array of objects `objs` and a
string `name` representing a property key. The function should return an array
containing values of the properties with this key.

If an object is missing the property, add `undefined` into the output array.

Examples:

```javascript
createList([{ a: 1 }, { a: 2 }], 'a') === [1, 2];
createList([{ a: 1, b: 3 }, { a: 2 }], 'b') === [3, undefined];
createList([{ a: 1, b: 3 }, { a: 2 }], 'c') === [undefined, undefined];
createList([], 'd') === [];
```
