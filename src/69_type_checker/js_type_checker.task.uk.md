Створи функцію `getType`, яка приймає аргумент `val` і повертає його тип у форматі
рядка. Якщо можливо, функція повинна повертати додаткову інформацію.

Замість того, щоб читати довгі пояснення, розглянь ці приклади коду:

```javascript
getType(undefined) === 'Undefined';
getType(null) === 'Null';
getType(true) === 'Boolean';
getType(function () {}) === 'Function';
getType(Math.max) === 'Function';
getType('abc') === 'String';
getType({ snap: 'crackle' }) === 'Object';
```

Числа повинні містити додаткову інформацію:

```javascript
getType(1) === 'Number Integer';
getType(1.1) === 'Number Float';
getType(NaN) === 'Number NaN';
getType(-Infinity) === 'Number Infinite';
```

Якщо рядок має числовий формат, поверни `'String Numeric'`:

```javascript
getType('123') === 'String Numeric';
getType('123.321') === 'String Numeric';
getType('0xF') === 'String Numeric';
```

Для сконструйованих об'єктів, поверни назву конструктора:

```javascript
getType(/abc/) === 'RegExp';
getType([1, 2, 3]) === 'Array';

function Custom() {}
getType(new Custom()) === 'Custom';
```
