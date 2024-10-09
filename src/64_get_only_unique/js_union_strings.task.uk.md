Напиши функцію `unionStrings`, яка:

- приймає два рядки `sentence1` та `sentence2`, які містять тільки латинські літери в нижньому регістрі від `a` до `z`;
- повертає відсортований рядок, який містить літери з обох рядків.

Кожна літера в отриманому рядку має траплятися лише один раз.

Приклади:

```javascript
const s1 = 'aabbbccccdefgg';
const s2 = 'xxxyyabklmopg';

unionStrings(s1, s2) === 'abcdefgklmopxy';

const s3 = 'loopingisfunbutdangerous';
const s4 = 'lessdangerousthancoding';

unionStrings(s3, s4) === 'abcdefghilnoprstu';
```
