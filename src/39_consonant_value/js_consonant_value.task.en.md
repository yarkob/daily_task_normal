Create a function `getHighestValue` that accepts a string `str` the contains only
lowercase English letters and no spaces. The function should return the highest
value of the consonant substrings. Consonants are any letters of the alphabet
except `'aeiou'`.

Each letter has a value which corresponds to its position in the alphabet:

```
a = 1
b = 2
c = 3
...
z = 26
```

For example, let's take a word `'testing'`. We have three substrings of consonants,
are here are their values:

```
't' = 20
'st' = 19 + 20 = 39
'ng' = 14 + 7 = 21
```

The highest value among the substrings is `39`, so the function should return it.

Other examples:

```javascript
getHighestValue('aeuiae') === 0; // no consonants
getHighestValue('d') === 4;
getHighestValue('blink') === 25; // 'nk' has the highest value, which is 14 + 11 = 25
getHighestValue('') === 0; // no consonants
```
