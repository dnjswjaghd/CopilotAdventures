const { getLightIntensity } = require('../The-Celestial-Alignment-of-Lumoria');

describe('빛 강도 계산', () => {
    test('첫 번째 행성은 항상 Full', () => {
        expect(getLightIntensity(0, 0)).toBe('Full');
    });
    test('그림자 1개면 None', () => {
        expect(getLightIntensity(2, 1)).toBe('None');
    });
    test('그림자 2개 이상이면 None (Multiple Shadows)', () => {
        expect(getLightIntensity(3, 2)).toBe('None (Multiple Shadows)');
    });
    test('그 외는 Partial', () => {
        expect(getLightIntensity(2, 0)).toBe('Partial');
    });
});
