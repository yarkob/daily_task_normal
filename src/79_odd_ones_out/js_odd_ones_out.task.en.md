Write a function `removeOddOccurences` that accepts an array of numbers `nums` and removes all numbers that repeat an odd number of times.

That's how it works:

`nums` = `[1, 2, 3, 1, 3, 3]`

- the number `1` appears twice
- the number `2` appears once
- the number `3` appears three times

`2` and `3` both appear an odd number of times, so they are removed from the list.
The final result is: `[1, 1]`.

More examples:

```javascript
removeOddOccurences([1, 1, 2, 2, 3, 3, 3, 4]) === [1, 1, 2, 2];
removeOddOccurences([26, 24, 24, 26]) === [26, 24, 24, 26];
removeOddOccurences([1, 2, 3]) === [];
removeOddOccurences([1]) === [];
```
