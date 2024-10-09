Create a function `getRow` that accepts a non-negative integer `rowIndex` and
returns the row of the Pascal's triangle that corresponds to this index. The
result should be an array of integers representing the row of the triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above
it as in the [gif](https://mate-academy-images.s3.eu-central-1.amazonaws.com/Pascal_Triangle_Animated2_a46e4d5e0c.gif):

Note: the first row has the index `0`.

Examples:

```js
getRow(0) === [1];
getRow(3) === [1, 3, 3, 1];
getRow(5) === [1, 5, 10, 10, 5, 1];
```
