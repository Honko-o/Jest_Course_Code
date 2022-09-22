const theSum = require('../theSum');

it('should return 0 if no Argument is supplied', () => {
    expect(theSum()).toBe(0);
});

it('should return one number if one is supplied', () => {
    expect(theSum(10)).toBe(10);
});

it('should return the result of two Added Numbers', () => {
    expect(theSum(10, 20)).toBe(30);
});

it('should return the result of two Added Numbers', () => {
    expect(theSum(10, 20, 30)).toBe(60);
});
