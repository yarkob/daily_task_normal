Наближається Різдво, і у Санта-Клауса є довгий список, який потрібно переглянути, щоб визначити, хто заслуговує на подарунки.

Напиши функцію `createList`, яка приймає два масиви рядків `santasList` і `childrenList` і повертає масив, що містить ім'я кожної дитини з `childrenList`, яке також міститься в `santasList`.

Примітки:

- порівняння має враховувати регістр;
- результат повинен містити кожне ім'я лише один раз;
- результат повинен бути відсортований за алфавітом.

Приклади:

```javascript
createList(
  ['Jason', 'Jackson', 'Jordan', 'Johnny'],
  ['Jason', 'Jordan', 'Jennifer'],
) === ['Jason', 'Jordan'];
createList(['JAsoN', 'JaSON', 'jasON'], ['JasoN', 'JAsoN', 'jASon']) ===
  ['JAsoN', 'jASon'];
createList(['John', 'James'], []) === [];
```
