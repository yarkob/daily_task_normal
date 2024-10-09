Create a function `checkSafety` that accepts a string `word` and checked how safe it is.

This check is needed because of a new virus, which chooses any three consecutive
letters from the `word` and shuffle their order. A triple of letters is considered
shuffled only if the position of at least one letter has changed - preserving the
positions of all three letters isn't considered shuffling.

However, the virus doesn't always pay attention to how it's shuffling and can
sometimes end up with the same word. For example, it can take the word `doll`,
choose letters `o`, `l` and `l` and shuffle them as follows: the `o` stays in the
same position while the two `l`s are swapped.

To protect from this virus, you develop an app that measures the safety of a word
based on how likely it is to be misinterpreted by a shuffle.

The function should calculate and return the number of triples formed by consecutive letters
that **can** stay the same after shuffling.

Examples:

```javascript
checkSafety('number') === 0; // no triples where letters can stay the same after shuffling
checkSafety('eel') === 1; // 'e' and 'e' from 'eel' can stay the same after shuffling
checkSafety('food') === 2; // 'o' and 'o' from 'foo'; 'o' and 'o' from 'ood' can stay the same after shuffling
checkSafety('wwwww') === 3; // 'www', 'www' and 'www' are three triples where letters stay the same after shuffling
```
