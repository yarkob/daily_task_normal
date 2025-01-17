У містера Скруджа є сума грошей, яку він хоче інвестувати. Перед цим він хоче дізнатися, скільки років ця сума повинна зберігатися в банку, щоб вона перетворилася в бажану суму.

Сума зберігається роками в банку, де щорічно виплачуються відсотки. Після сплати податків за рік нова сума знову інвестується.

Примітка до податку: оподатковується не основна сума вкладених коштів, а тільки нараховані за рік відсотки.

Напиши функцію `calculateYears`, яка повертає кількість років у вигляді цілого числа для того, щоб містер Скрудж отримав бажану суму.

Приклад:

```
principal = 1000.00
interest = 0.05
tax = 0.18
desired = 1100.00

Післе 1-го року --> principal = 1041.00
Післе 2-го року --> principal = 1083.86
Післе 3-го року --> principal = 1128.30
```

Таким чином, містеру Скруджу доведеться чекати 3 роки, щоб початкова сума перетворилася в бажану.

Приклади:

```javascript
calculateYears(1000, 0.01625, 0.18, 1200) === 14;
calculateYears(1000, 0.05, 0.18, 1000) === 0;
```

Припустимо, що бажана сума завжди більше початкової основної суми. Але якщо бажана сума дорівнює початковій, то функція повинна повернути `0` років.
