const passwordChecker = require('../src/passwordChecker');

describe('Password Checker', () => {
    describe('Length validation', () => {
        it('should reject passwords shorter than 8 characters', () => {
            expect(passwordChecker('Abc@1')).toBe(false);
        });

        it('should accept passwords with 8 or more characters', () => {
            expect(passwordChecker('Abcd@123')).toBe(true);
        });
    });

    describe('Special character validation', () => {
        it('should reject passwords without special characters', () => {
            expect(passwordChecker('Abcd1234')).toBe(false);
        });

        it('should accept passwords with special characters', () => {
            expect(passwordChecker('Abcd@123')).toBe(true);
        });
    });

    describe('Number validation', () => {
        it('should reject passwords without numbers', () => {
            expect(passwordChecker('Abcd@efg')).toBe(false);
        });

        it('should accept passwords with numbers', () => {
            expect(passwordChecker('Abcd@123')).toBe(true);
        });
    });

    describe('IPL validation', () => {
        it('should reject passwords containing "IPL" in uppercase', () => {
            expect(passwordChecker('IPL@1234')).toBe(false);
        });

        it('should reject passwords containing "ipl" in lowercase', () => {
            expect(passwordChecker('test@ipl1')).toBe(false);
        });

        it('should reject passwords containing "IpL" in mixed case', () => {
            expect(passwordChecker('IpL@1234')).toBe(false);
        });
    });

    describe('Valid passwords', () => {
        it('should accept valid passwords meeting all criteria', () => {
            expect(passwordChecker('Valid@123')).toBe(true);
            expect(passwordChecker('Str0ng#Pwd')).toBe(true);
        });
    });
});
