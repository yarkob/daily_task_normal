Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Write a function called `isCouponValid` which verifies that a coupon code is valid and not expired.
The function takes 4 parameters:

- `enteredCode` is the code entered by the user;
- `correctCode` is the valid coupon code;
- `currentDate` is the current date;
- `expirationDate` is the date until which the coupon is valid in the format `"MONTH DATE, YEAR"`.

`enteredCode` should be equal to `correctCode` and `expirationDate` should be after `currentDate` in order for customers to be able to use their coupons.

Examples:

```javascript
isCouponValid('wGh123kIo', 'wGh123kIo', 'July 9, 2020', 'July 9, 2020') ===
  true;
isCouponValid('001', '001', 'July 9, 2020', 'July 8, 2020') === false;
```
