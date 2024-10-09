Напиши функцію `countAddresses`, яка приймає непорожній масив об'єктів `addresses`
і повертає масив із кількістю адрес кожного штату.

Об'єкти у вхідному масиві матимуть таку структуру:

```
{
  house: 1234,
  street: 'Lonely St.',
  city: 'Soldotna',
  state: 'AK',
}
```

Об'єкти у вихідному масиві повинні мати таку структуру:

```
{
  state: 'AK',
  count: 1,
}
```

Якщо об'єкт у вхідному масиві не має властивості `'state'`, функція повинна
видати помилку `'Wrong address'`.

Примітка: об'єкти у вихідному масиві повинні бути впорядковані за першою появою
штата.

Приклад:

```javascript
const addresses = [
  {
    house: 5,
    street: 'John St.',
    city: 'Cheyenne',
    state: 'WY',
  },
  {
    house: 63,
    street: 'Sam St.',
    city: 'Logan',
    state: 'UT',
  },
  {
    house: 18,
    street: 'Edward St.',
    city: 'Riverton',
    state: 'WY',
  },
];

countAddresses(addresses) ===
  [
    {
      state: 'WY',
      count: 2,
    },
    {
      state: 'UT',
      count: 1,
    },
  ];
```
