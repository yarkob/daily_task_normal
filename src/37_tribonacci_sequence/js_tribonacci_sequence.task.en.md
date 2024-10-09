Let's meet Tribonacci, a bigger brother of the Fibonacci!

As the name may already reveal, it works basically like a Fibonacci but summing
the last 3 (instead of 2) numbers of the sequence to generate the next.

So, if we are to start our Tribonacci sequence with `[1, 1, 1]`, we have this sequence:

```
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
```

But what if we started with `[0, 0, 1]`? As starting with `[0, 1]` instead of `[1, 1]`
basically shifts the common Fibonacci sequence by once place. You may think that
it works in the same way here, but that is not the case and we would get:

```
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
```

So now your task is to create a function `getTribonacciSequence`
that accepts an array of three non-negative integers `start` and a non-negative
integer `n`. The function should return the first `n` elements of the Tribonacci
sequence, including the `start`.

If `n` = 0, return an empty array.

Examples:

```javascript
getTribonacciSequence([1, 1, 1], 5) === [1, 1, 1, 3, 5];
getTribonacciSequence([1, 2, 3], 8) === [1, 2, 3, 6, 11, 20, 37, 68];
getTribonacciSequence([2, 5, 8], 2) === [2, 5];
getTribonacciSequence([10, 11, 12], 0) === [];
```
