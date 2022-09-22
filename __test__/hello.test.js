const hello = require('../hello');

test('Say Jest Message', () => {
    expect(hello('saleh')).toBe('Hello saleh');
});
