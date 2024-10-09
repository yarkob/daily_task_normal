Дано трикутник з послідовних непарних чисел:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Напиши функцію `sumInRow`, яка обчислює суму чисел в n-ому рядку цього трикутника (починаючи з індексу 1).

Приклади:

```javascript
sumInRow(1) === 1;
sumInRow(2) === 8; // 3 + 5 = 8
```