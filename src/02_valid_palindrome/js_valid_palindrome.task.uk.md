Створи функцію `isPalindrome`, яка приймає непорожній рядок `str` та перевіряє, чи
є він паліндромом (читається справа наліво так само, як і зліва направо), і
повертає `true` або `false`.

**Примітка:** враховуй тільки букви та цифри, ігноруй регістр.

Приклади:

```javascript
isPalindrome('madam') === true;
isPalindrome('Kayak') === true; // регістр треба ігнорувати
isPalindrome('b2b') === true;
isPalindrome('Was it a cat I saw?') === true; // пробіли і пунктуацію треба ігнорувати
isPalindrome('hello') === false; // 'hello' справа наліво - це 'olleh', тому це не паліндром
isPalindrome('1noon2') === false; // '1noon2' справа наліво - це '2noon1', тому це не паліндром
```
