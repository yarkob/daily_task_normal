Create the function `getType` that accepts an argument `val` and returns its type
as a string. If possible, the function should return additional information.

Consider the following code examples instead of reading long explanations:

```javascript
getType(undefined) === 'Undefined';
getType(null) === 'Null';
getType(true) === 'Boolean';
getType(function () {}) === 'Function';
getType(Math.max) === 'Function';
getType('abc') === 'String';
getType({ snap: 'crackle' }) === 'Object';
```

Numbers should include additional information:

```javascript
getType(1) === 'Number Integer';
getType(1.1) === 'Number Float';
getType(NaN) === 'Number NaN';
getType(-Infinity) === 'Number Infinite';
```

If a string is numeric-formatted, return `'String Numeric'`:

```javascript
getType('123') === 'String Numeric';
getType('123.321') === 'String Numeric';
getType('0xF') === 'String Numeric';
```

For constructed objects, return the name of the constructor:

```javascript
getType(/abc/) === 'RegExp';
getType([1, 2, 3]) === 'Array';

function Custom() {}
getType(new Custom()) === 'Custom';
```
