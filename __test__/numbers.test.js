const numbers = require('../numbers');

test('Number 1 should be in Numbers Array', () => {
    expect(numbers.includes(1)).toBe(true);
});

test('No Strings Allowed', () => {
    for (let i = 0; i < numbers.length; i++) {
        expect(Number.isNaN(numbers[i])).toBeFalsy();
    }
});

it('should check Number Greater Than or Equal to 5', () => {
    expect(numbers[0]).toBeGreaterThanOrEqual(5);
});

it('should return undefined if no value is assigned', () => {
    let variable;
    expect(variable).toBeUndefined();
});

it('should return the matched pattern word', () => {
    let string = 'I Love saleh Abuhussein';
    expect(string).toMatch(/saleh/gi);
});

it('should check if property Age Exist', () => {
    let objecta = {
        age: 22,
        name: 'saleh',
    };

    expect(objecta).toHaveProperty('age', 22);
});

expect.extend({
    toBeBelowThan(received, target) {
        const pass = received < target;
        if (pass) {
            return {
                message: () =>
                    `Expected ${received} To Be Lower Than ${target}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `Error: Expected ${received} To Be Lower Than ${target}`,
                pass: false,
            };
        }
    },
});

expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if (pass) {
            return {
                message: () =>
                    `Expected ${received} To Be Between ${start} And ${end}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `Error: Expected ${received} To Be Between ${start} And ${end}`,
                pass: false,
            };
        }
    },
});

test('Number Should be Between Two Numbers', () => {
    expect(500).toBeBetween(400, 800);
});

test('Containing Array', () => {
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 3]));
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test.only('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow('are');
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});
