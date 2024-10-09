Створи функцію `generatedPieChart`, яка приймає об'єкт `data` у форматі `JSON` і
повертає кругову діаграму на основі наведеної статистики.

Ключем в об'єкті `data` є назва предмета, а значенням - його кількість.

Результатом функції повинен бути об'єкт у форматі `JSON`, що містить кожен ключ
з `data` з відповідним кутом (у градусах). Кут слід округлити до двох знаків після
коми, **коли це необхідно**.

Приклади:

```js
const data = `{
  "pencils": 18,
  "pens": 36
}`;
generatePieChart(data) ===
  `{
  "pencils": 120,
  "pens": 240
}`;

const data = `{
  "cats": 182,
  "dogs": 213,
  "rabbits": 79,
}`;
generatePieChart(data) ===
  `{
  "cats": 138.23,
  "dogs": 161.77,
  "rabbits": 60,
}`;

const data = `{
  "phones": 57
}`;
generatePieChart(data) ===
  `{
  "phones": 360
}`;
```