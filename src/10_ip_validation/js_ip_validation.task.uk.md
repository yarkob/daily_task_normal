Напиши функцію `validateIP`, яка приймає рядок `str` і визначає, чи `str` містить
валідну адресу IPv4. Функція повинна повертати булеве значення.

Правила для валідного IP:

- IP складається з чотирьох октетів, розділених крапками;
- кожен октет містить значення від `0` до `255` включно;
- октет не може починатися з `0` і містити більше однієї цифри (наприклад, `034`
  не є валідним);
- октет не може містити жодних символів, крім цифр (наприклад літери, пробіли та
  символи переноса рядка не є валідними).

Приклади валідних IP:

```
5.6.7.8
145.90.53.2
```

Приклади невалідних IP:

```
23.45.67 // три октети
1.2.5.6.8 // п’ять октетів
199.564.28.13 // 564 більше, ніж 255
174.231.093.46 // '093' не є валідним
56.128.e1.2 // літери не є валідними
```

При вирішенні цієї задачі можна використовувати [Регулярні вирази](https://mate-academy.github.io/fe-program/js/topics/regex.html)