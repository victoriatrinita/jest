const script = require('./script');

test('adds 2 + 3 to equal 5', () => {
    expect(script.sum(2, 3)).toBe(5);
});

test('creates a copy of the object', () => {
    expect(script.cloneObj({fruit: "apple"})).toEqual({fruit: "apple"})
});