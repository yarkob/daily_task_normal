Напиши функцію `divideList`, яка приймає масив рядків `list` і повертає
всі способи розділення `list` на дві непорожні частини.

Примітки:

- `list` містить щонайменше два непорожні рядки;
- кожна частина буде рядком, в якому елементи масиву розділені пробілом;
- елементи в частині повинні бути в тому ж порядку, що і в вихідному масиві.

Приклади:

```js
divideList(['milk', 'butter']) === [['milk', 'butter']];
divideList(['car', 'train', 'airplane']) ===
  [
    ['car', 'train airplane'],
    ['car train', 'airplane'],
  ];
divideList(['onion', 'garlic', 'tomato', 'corn']) ===
  [
    ['onion', 'garlic tomato corn'],
    ['onion garlic', 'tomato corn'],
    ['onion garlic tomato', 'corn'],
  ];
```
