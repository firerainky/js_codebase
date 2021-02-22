/**
 * Stack implementation with ES6 Classes
 */
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  get count() {
    return _items.get(this).length;
  }
  
  push(item) {
    _items.get(this).push(item);
  }

  pop() {
    if (_items.get(this).length <= 0) {
      throw new Error('Stack is empty.');
    }
    return _items.get(this).pop();
  }

  peek() {
    if (_items.get(this).length <= 0) {
      throw new Error('Stack is empty.');
    }
    return _items.get(this)[_items.get(this).length - 1];
  }
}

// Test
const s = new Stack();
s.push('a');