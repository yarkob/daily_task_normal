Create a function `sortAnimals` that accepts an array of object `animals` and returns
its copy sorted in a certain way:

- at first, it should be sorted by the animal's number of legs;
- then, if some animals have equal number of legs, they should be sorted by name.

Notes:

- the function should not change the initial array;
- if `null` is passed, return `null`;
- if an empty array is passed, return an empty array.

Consider an example:

```javascript
const animals = [
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
];
```

First, we sort `animals` by number of legs, so we get:

```javascript
const sortedByLegs = [
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Cat', numberOfLegs: 4 },
];
```

There are three animals who have 4 legs, so we should sort them by name. So, our
final result is:

```javascript
const sortedByLegs = [
  { name: 'Snake', numberOfLegs: 0 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Pig', numberOfLegs: 4 },
];
```
