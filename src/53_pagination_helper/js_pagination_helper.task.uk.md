Створи клас `PaginationHelper`, який є корисним класом для запиту інформації про
пагінацію масиву.

Клас призначений для прийому масиву рядків `collection` та цілого числа
`itemsPerPage`, що вказує, скільки елементів розміщено на кожній сторінці.

Клас повинен мати такі методи:

- `pageCount` повертає кількість сторінок у колекції;
- `itemCount` повертає кількість елементів у колекції;
- `pageItemCount` приймає ціле число `pageIndex` і повертає кількість елементів
  на цій сторінці; якщо `pageIndex` не є валідним, потрібно повернути` -1`;
- `pageIndex` приймає ціле число `itemIndex` і повертає індекс сторінки, на якій
  знаходиться цей елемент; якщо `itemIndex` не є валідним, потрібно повернути `-1`;

Приклади:

```js
const pagination = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

pagination.pageCount() === 2;
pagination.itemCount() === 6;
pagination.pageItemCount(0) === 4;
pagination.pageItemCount(1) === 2; // остання сторінка
pagination.pageItemCount(2) === -1; // сторінка невалідна
pagination.pageIndex(2) === 0;
pagination.pageIndex(5) === 1;
pagination.pageIndex(7) === -1; // індекс елемента невалідний
```
