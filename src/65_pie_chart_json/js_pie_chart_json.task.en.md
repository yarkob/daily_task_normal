Create a function `generatePieChart` that accepts a `JSON` object `data` and returns
a pie chart based on the given statistics.

The key in the `data` object is the name of the item, and the value is its quantity.

The result of the function should be a `JSON` containing each key from data with
its corresponding angle (in degrees). The angle should be rounded to two decimal
places **when necessary**.

Examples:

```js
const data = `{
  "pencils": 18,
  "pens": 36
}`;
generatePieChart(data) ===
  `{
  "pencils": 120,
  "pens": 240
}`;

const data = `{
  "cats": 182,
  "dogs": 213,
  "rabbits": 79,
}`;
generatePieChart(data) ===
  `{
  "cats": 138.23,
  "dogs": 161.77,
  "rabbits": 60,
}`;

const data = `{
  "phones": 57
}`;
generatePieChart(data) ===
  `{
  "phones": 360
}`;
```
