Write a function `unionStrings` that:

- takes two strings `sentence1` and `sentence2`, which contain only Latin lowercase letters from `a` to `z`;
- returns a sorted string containing letters from both strings.

Each letter in the resulting string must appear only once.

Examples:

```javascript
const s1 = 'aabbbccccdefgg';
const s2 = 'xxxyyabklmopg';

unionStrings(s1, s2) === 'abcdefgklmopxy';

const s3 = 'loopingisfunbutdangerous';
const s4 = 'lessdangerousthancoding';

unionStrings(s3, s4) === 'abcdefghilnoprstu';
```
