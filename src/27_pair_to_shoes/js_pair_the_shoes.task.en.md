There are several shoes stored in the room. Each shoe is described by two values `type` and `size`:

- `type` indicates if it's a left or a right shoe;
- `size` is the size of the shoe.

Write a function `pairShoes` that accepts an array of shoes. Each shoe is given in the format `[type, size]`, where type is either `0` or `1` for left and right respectively, and size is a positive integer.

Return `true` if it is possible to pair the shoes, `false` otherwise.

Examples:

```js
shoes1 = [
  [0, 21],
  [1, 23],
  [1, 21],
  [0, 23],
];

pairShoes(shoes1) === true;

shoes2 = [
  [0, 20],
  [1, 21],
  [1, 20],
  [1, 21],
];

pairShoes(shoes2) === false;
```
