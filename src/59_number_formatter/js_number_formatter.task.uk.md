Створи функцію `formatNumber`, яка приймає непорожній рядок `template` та необов'язковий
параметр `number` - ціле число, яке повинне бути відформатоване відповідно до `template`.

Наприклад:

```javascript
template = 'xxxx xxxx xx';
number = 1122334455;

formatNumber = '1122 3344 55';
```

Кілька правил:

- `template` може містити літери, інші цифри, спеціальні символи та пробіли;
- потрібно замінити лише літери (як малі, так і великі);
- якщо `number` не передано, використовуй цифри `1234567890`, щоб замінити літери.
- якщо переданий `number` або `number` за замовчуванням коротший за `template` -
  повтори його, щоб замінити всі літери;

Ще кілька прикладів:

```javascript
formatNumber('xxx xxxxx xx') === '123 45678 90'; // 1234567890 - це номер за замовчуванням
formatNumber('+ 555 aaaa bbbb', 18031978) === '+555 1803 1978'; // цифри та спеціальні символи в шаблоні не потрібно замінювати
formatNumber('xxx yyy zzz', 4567) === '456 745 674'; // якщо число коротше за шаблон, повтори його, щоб замінити всі літери
```
