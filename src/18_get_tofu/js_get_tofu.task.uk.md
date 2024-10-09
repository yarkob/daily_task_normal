Допоможи Судзукі придбати тофу!

Судзукі послав на ринок стюарда-мирянина, який буде закуповувати для ченців деякі товари, які не виробляються в монастирських садах. У стюарда з собою велика коробка, повна дрібних грошей від пожертвувань, зроблених раніше протягом дня, упереміш з деякими особистими речами. Тобі дадуть ряд предметів, що представляють коробку `box`.

Відсортуй предмети в коробці, знайшовши всі монети та відклавши все інше.

Монети мають такі значення:

- `monme = 60`
- `mon = 1`

Тобі буде дана структура даних, подібна наведеній нижче:

```javascript
box =
  'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';
cost = 124; // 100 ≤ cost ≤ 1000
```

Поверни масив, який містить:

[кількість монет mon в коробці, кількість монет monme в коробці, сума всіх монет в коробці, мінімальна кількість монет, яка необхідна для покупки тофу].

```javascript
getTofu(cost, box) === [45, 5, 345, 6];
```

Визнач мінімальну кількість монет, яка необхідна, щоб заплатити за тофу. Ти повинен заплатити однією сумою, і якщо у тебе немає потрібної решти — поверни `'leaving the market'`.

Якщо вартість тофу вище, ніж загальна сума грошей — також поверни `'leaving the market'`.