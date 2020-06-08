const fizzBuzz = require('./fizzBuzz.js');




test('fizzBuzz(15)', () => {
    expect(fizzBuzz(15)).toBe('FIZZBUZZ');
    expect(fizzBuzz(31)).toBe(31);
    expect(fizzBuzz(9)).toBe('FIZZ');
    expect(fizzBuzz(20)).toBe('BUZZ');
    expect(fizzBuzz(-30)).toBe('FIZZBUZZ');
})

