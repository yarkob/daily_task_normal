Write a higher order function `chainer` for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

```javascript
chainer([a, b, c, d])(input) === d(c(b(a(input))));
```

Example:

```javascript
function f1(x) {
  return x * 2;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return Math.pow(x, 2);
}

chainer([f1, f2, f3])(0) === 4;
```
