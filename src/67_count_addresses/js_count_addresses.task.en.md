Write a function `countAddresses` that accepts a non-empty object array
`addresses` and returns an array with the count of addresses for each state.

The input objects will have the following structure:

```
{
  house: 1234,
  street: 'Lonely St.',
  city: 'Soldotna',
  state: 'AK',
}
```

The returned objects must have the following structure:

```
{
  state: 'AK',
  count: 1,
}
```

If an object in the input array doesn't have a `'state'` property, the function
should throw an error `'Wrong address'`.

Note: the objects in the outpput array must be ordered by the appearance of the
state.

Example:

```javascript
const addresses = [
  {
    house: 5,
    street: 'John St.',
    city: 'Cheyenne',
    state: 'WY',
  },
  {
    house: 63,
    street: 'Sam St.',
    city: 'Logan',
    state: 'UT',
  },
  {
    house: 18,
    street: 'Edward St.',
    city: 'Riverton',
    state: 'WY',
  },
];

countAddresses(addresses) ===
  [
    {
      state: 'WY',
      count: 2,
    },
    {
      state: 'UT',
      count: 1,
    },
  ];
```
