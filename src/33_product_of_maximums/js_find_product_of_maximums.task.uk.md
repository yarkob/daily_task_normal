Напиши функцію `findMaximumProduct`, яка приймає масив `nums` з цілими числами та число `size`. `size` може бути більшим або дорівнювати `0`.

Знайди добуток найбільших чисел, їхня кількість передається параметром `size`. Якщо `size = 0`, поверни `1`. Довжина масиву становить щонайменше 3 елементи, а цифри можуть бути додатними, від'ємними та нулями.

Якщо число `size` більше або дорівнює довжині масиву, поверни добуток всіх елементів масиву.

Приклади:

```js
findMaximumProduct([10, 3, -1, -27], 3) === -30;
// Оскільки size = 3, тоді добуток трьох найбільших чисел з масиву
// дорівнює 10 * 3 * -1 = -30;

findMaximumProduct([10, 8, 3, 2, 1, 4, 10], 5) === 9600;
// Оскільки size = 5, тоді добуток трьох найбільших чисел з масиву
// дорівнює 10 * 10 * 8 * 4 * 3 = 9600;
```