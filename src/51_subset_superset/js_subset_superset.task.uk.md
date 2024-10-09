[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
об'єкти - це нові вбудовані об'єкти JavaScript, визначені з ECMAScript 2015.

Якщо кожен елемент об'єкта Set A також є елементом об'єкта Set B, то A називають
subset B, пишеться як `A ⊆ B`. Аналогічно, ми можемо написати `B ⊇ A,` що означає
'B є superset A'.

Наприклад:

```
{1, 3} ⊆ {1, 2, 3, 4}.
{1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

{1, 2, 3, 4} ⊇ {1, 3}.
{1, 2, 3, 4} ⊇ {1, 2, 3, 4}.
```

Створи 2 функції:

- `isSubset`, який приймає два об'єкти Set `subset` і `superset` і повертає `true`, якщо
  всі елементи `subset` присутні в `superset`. Якщо ні - функція повинна повернути
  `false`.

- `isSuperset`, який приймає два об'єкти Set `superset` і `subset` і повертає `true`,
  якщо `superset` містить усі елементи `subset`. Якщо ні - функція повинна
  повернути `false`.

Приклади:

```
A = new Set([1, 2]);
B = new Set([1, 2, 3]);

isSubset(A, B) = true
isSuperset (A, B) = false

A = new Set(['a', 'b', 'c', 'd']);
B = new Set(['a', 'd']);

isSubset(A, B) = false
isSuperset (A, B) = true

A = new Set([]);
B = new Set([10, 11, 12, 13]);

isSubset(A, B) = true
isSuperset (A, B) = false
```
