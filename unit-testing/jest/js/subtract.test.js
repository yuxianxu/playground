const subtract = require('./subtract')

test('properly adds two numbers', () => {
    expect(
        subtract(11, 2)
    ).toBe(9)
 })