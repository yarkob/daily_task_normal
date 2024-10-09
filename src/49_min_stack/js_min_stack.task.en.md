Create a function `MinStack` that supports the following methods:

- `MinStack()` initializes the stack object.
- `push(val)` pushes the element `val` into the stack. `val` is always a number.
- `pop()` removes the last element from the stack.
- `top()` returns the last element of the stack.
- `getMin()` returns the smallest element of the stack.

Examples:

```javascript
const stack = new MinStack();
stack.push(-2); // adds -2
stack.push(0); // adds 0
stack.push(-3); // adds -3
stack.getMin(); // returns -3
stack.pop(); // removes -3
stack.top(); // returns 0
stack.getMin(); // returns -2
```
