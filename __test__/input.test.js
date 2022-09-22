const checkInput = require('../input');

describe('Validate Input Value', () => {
    describe('Validate Empty or Spaces', () => {
        it('should return Unknown to empty input', () => {
            expect(checkInput()).toBe('Unknown');
        });

        it('should return Unknown to empty String', () => {
            expect(checkInput('')).toBe('Unknown');
        });

        it('should return Unknown to space', () => {
            expect(checkInput(' ')).toBe('Unknown');
        });

        it('should return string with no space at the Start or End', () => {
            expect(checkInput(' saleh ')).toBe('saleh');
        });
    });

    it('should check underscore at the first of the word', () => {
        expect(checkInput('_saleh')).toBe('saleh');
    });
});
