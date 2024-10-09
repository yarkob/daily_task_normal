Create a function `numberToTitle` that accepts a positive integer `num` representing
the column number, return its corresponding column title as it appears in an Excel sheet.

For example:

```
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
```

Examples:

```javascript
numberToTitle(1) === 'A';
numberToTitle(28) === 'AB';
numberToTitle(702) === 'ZZ';
numberToTitle(11111) === 'PKI';
```
