const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum defaults inputs to 0', () => {
  expect(sum(1)).toBe(1);
  expect(sum()).toBe(0);
});