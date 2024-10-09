'use strict';

const { MinStack } = require('./MinStack');

describe(`Function 'MinStack':`, () => {
  it(`should be declared`, () => {
    expect(MinStack).toBeInstanceOf(Function);
  });

  it(`should create an instance of MinStack`, () => {
    const stack = new MinStack();

    expect(stack).toBeInstanceOf(MinStack);
  });

  it(`should have a 'push' method`, () => {
    expect(MinStack.prototype.push).toBeInstanceOf(Function);
  });

  it(`should have a 'pop' method`, () => {
    expect(MinStack.prototype.pop).toBeInstanceOf(Function);
  });

  it(`should have a 'top' method`, () => {
    expect(MinStack.prototype.top).toBeInstanceOf(Function);
  });

  it(`should have a 'getMin' method`, () => {
    expect(MinStack.prototype.getMin).toBeInstanceOf(Function);
  });

  describe(`Method 'push':`, () => {
    it(`should add a value to the stack`, () => {
      const stack = new MinStack();

      stack.push(1);

      expect(stack.storage).toEqual([1]);
    });

    it(`should add several values to the stack if called several times`, () => {
      const stack = new MinStack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.storage).toEqual([1, 2, 3]);
    });

    it(`should not add anything to the stack if called without arguments`, () => {
      const stack = new MinStack();

      stack.push();

      expect(stack.storage).toEqual([]);
    });
  });

  describe(`Method 'pop':`, () => {
    it(`should remove the last element from the stack`, () => {
      const stack = new MinStack();

      stack.push(1);
      stack.pop();

      expect(stack.storage).toEqual([]);
    });

    it(`should remove several elements from the stack if called several times`, () => {
      const stack = new MinStack();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();

      expect(stack.storage).toEqual([1]);
    });

    it(`should not do anything if the stack is empty`, () => {
      const stack = new MinStack();

      stack.pop();

      expect(stack.storage).toEqual([]);
    });
  });

  describe(`Method 'top':`, () => {
    it(`should return the last element from the stack that consists of one element`, () => {
      const stack = new MinStack();

      stack.push(1);

      expect(stack.top()).toEqual(1);
    });

    it(`should return the last element from the stack that consists of several elements`, () => {
      const stack = new MinStack();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);

      expect(stack.top()).toEqual(5);
    });
  });

  describe(`Method 'getMin':`, () => {
    it(`should return the only element from the stack that consists of one element`, () => {
      const stack = new MinStack();

      stack.push(7);

      expect(stack.getMin()).toEqual(7);
    });

    it(`should return the smallest element from the stack that consists of several elements`, () => {
      const stack = new MinStack();

      stack.push(1);
      stack.push(2);
      stack.push(-1);
      stack.push(0);
      stack.push(3);

      expect(stack.getMin()).toEqual(-1);
    });
  });
});
