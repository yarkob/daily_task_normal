Write a function `getLongestChain` that accepts a string `word` and returns the length of the longest vowel chain in this word.

The `word` contains lowercase alphabetic characters only and no spaces. Vowels are: `a`, `e`, `i`, `o`, `u`.

Examples:

```javascript
getLongestChain('work') === 1; // 'o' is the longest vowel chain
getLongestChain('create') === 2; // 'ea' is the longest vowel chain
getLongestChain('hellooooo') === 5; // 'ooooo' is the longest vowel chain
getLongestChain('js') === 0; // 'js' doesn't contain any vowels
```
