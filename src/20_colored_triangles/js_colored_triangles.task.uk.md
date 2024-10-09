Кольоровий трикутник створюється з ряду кольорів, кожен з яких червоний, зелений або синій. Послідовні рядки, кожен з яких містить на один колір менше, ніж попередній, створюються з урахуванням двох суміжних кольорів у попередньому рядку. Якщо ці кольори однакові, у новому рядку використовується той самий колір. Якщо вони різні, у новому рядку використовується відсутній колір. Це продовжується доти, доки не буде сформовано останній рядок лише з одним кольором.

Різні варіанти:

Кольори тут: `G G` `B G` `R G` `B R`
Стають кольором: `G` `R` `B` `G`

Більший приклад:

```
R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
```

Напиши функцію `getLastColor`, яка приймає рядок `row`, що є першим рядком трикутника, і повертає кінцевий колір, який відображатиметься в нижньому рядку.

У випадку з наведеним вище прикладом, якщо `row` має значення `RRGBRGBB`, треба повернути `G`.

Вхідний рядок містить лише великі літери `R`,` G`, `B`, і в ньому буде принаймні одна літера.

Якщо `row` містить лише один колір, поверни цей колір.

Приклади:

```javascript
getLastColor('BR') === 'G';
getLastColor('RRR') === 'R';
getLastColor('RBRGBRB') === 'G';
getLastColor('B') === 'B';
```