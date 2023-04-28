import { fibonacci } from './index';

// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597

describe('Fibonacci', () => {
    it('Should return 0 when input is 0', () => {
        expect(fibonacci).toBe(0);
    })
})
