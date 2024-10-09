Створи функцію `sortAnimals`, яка приймає масив об'єктів `animals` і повертає
його копію, відсортовану певним чином:

- спочатку слід сортувати за кількістю ніг тварин (`numberOfLegs`);
- тоді, якщо у деяких тварин однакова кількість ніг, їх слід сортувати за назвами
  (`name`).

Примітки:

- функція не повинна змінювати початковий масив;
- якщо передано `null`, поверни `null`;
- якщо передано порожній масив, поверни порожній масив.

Розглянемо приклад:

```javascript
const animals = [
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
];
```

Спочатку ми сортуємо `animals` за кількістю ніг, отримаємо:

```javascript
const sortedByLegs = [
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Cat', numberOfLegs: 4 },
];
```

Є три тварини, які мають 4 ноги, тому ми повинні відсортувати їх за назвами. Отже,
наш кінцевий результат:

```javascript
const sortedByLegs = [
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
];
```
