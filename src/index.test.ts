import { fibonacci } from './index';

// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

describe('Fibonacci', () => {
    it('Should return 0 when input is 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('Should return 1 when input is 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
})
