You have a complex object that has many deeply nested variables.

Add the `extract` method to the objects' prototype, which accepts a string `path`
representing a nested path and returns its value.

If the path is wrong and the sought property doesn't exist, return `undefined`.

Example:

```javascript
const object = {
  person: {
    name: 'David',
    data: {
      hometown: 'Manchester',
      birthdate: '10.12.1998',
      bio: {
        funFact: 'I am fond of diving!',
      },
    },
  },
};

object.extract('person.name') === 'David';
object.extract('person.data.hometown') === 'Manchester';
object.extract('person.data.nationality') === undefined;
```
