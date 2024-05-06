const stack = require('../src/stack');

beforeEach(() => {
	stack.clear();
});

// my tests
test('return undefined when popping the empty stack', () => {
	expect(stack.pop()).toBeUndefined();
});

test('return undefined when peeking the empty stack', () => {
	expect(stack.peek()).toBeUndefined();
});

test('push elements onto the stack', () => {
	stack.push('test1');
	stack.push('test2');
	stack.push('test3');
	expect(stack.peek()).toBe('test3');
});

test('pop elements from the stack', () => {
	stack.push('test1');
	stack.push('test2');
	stack.push('test3');
	expect(stack.pop()).toBe('test3');
	expect(stack.peek()).toBe('test2');
});

test('return the topmost element without removing it', () => {
	stack.push('test1');
	stack.push('test2');
	stack.push('test3');
	expect(stack.peek()).toBe('test3');
	expect(stack.peek()).toBe('test3');
});
