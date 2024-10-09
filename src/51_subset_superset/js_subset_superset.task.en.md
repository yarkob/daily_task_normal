[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
objects are new JavaScript built-in objects defined since ECMAScript 2015.

If every member of set A is also a member of set B, then A is said to be a
subset of B, written `A ⊆ B`. Equivalently, we can write `B ⊇ A,` read as 'B is a
superset of A'.

For example:

```
{1, 3} ⊆ {1, 2, 3, 4}.
{1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

{1, 2, 3, 4} ⊇ {1, 3}.
{1, 2, 3, 4} ⊇ {1, 2, 3, 4}.
```

Create 2 functions:

- `isSubset` that accepts two sets `subset` and `superset` and returns `true` if
  all elements of the `subset` are present in the `superset`. Otherwise, the
  function should return `false`.

- `isSuperset` that accepts two sets `superset` and `subset` and returns `true`
  if the `superset` contains all elements of the `subset`. Otherwise, the
  function should return `false`.

Examples:

```
A = new Set([1, 2]);
B = new Set([1, 2, 3]);

isSubset(A, B) = true
isSuperset (A, B) = false

A = new Set(['a', 'b', 'c', 'd']);
B = new Set(['a', 'd']);

isSubset(A, B) = false
isSuperset (A, B) = true

A = new Set([]);
B = new Set([10, 11, 12, 13]);

isSubset(A, B) = true
isSuperset (A, B) = false
```
