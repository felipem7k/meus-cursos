import getFactorial from './factorial';

test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function);
});

test('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4);
    const expected = 24;

    expect(actual).toBe(expected);
});

