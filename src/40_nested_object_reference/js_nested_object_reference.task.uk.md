У тебе є складний об’єкт, який має багато рівнів вкладеності.

Додай метод `extract` до прототипу об'єктів, який приймає рядок `path`, що
представляє вкладений шлях, і повертає його значення.

Якщо шлях неправильний і шуканої властивості не існує, поверни `undefined`.

Приклад:

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
