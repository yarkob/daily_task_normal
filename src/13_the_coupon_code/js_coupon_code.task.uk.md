Твій інтернет-магазин любить видавати купони з нагоди особливих випадків. Деякі клієнти намагаються обдурити систему, вводячи недійсні коди або використовуючи прострочені купони.

Напиши функцію `isCouponValid`, яка перевіряє, що код купона є дійсним і термін його дії ще не закінчився. Функція приймає 4 параметри:

- `enteredCode` - код купону, який вводить користувач;
- `correctCode` - валідний код купону;
- `currentDate` - поточна дата;
- `expirationDate` - дата, до якої купон дійсний у форматі `"MONTH DATE, YEAR"`.

`enteredCode` повинен збігатися з `correctCode`, а `expirationDate` повинна бути після `currentDate`, щоб клієнти могли використовувати свої купони.

Приклади:

```javascript
isCouponValid('wGh123kIo', 'wGh123kIo', 'July 9, 2020', 'July 9, 2020') ===
  true;
isCouponValid('123', '123', 'July 9, 2020', 'July 8, 2020') === false;
```
