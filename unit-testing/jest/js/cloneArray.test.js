const cloneArray = require('./cloneArray')

test('properly clones array', () => {

    const array = [2, 3, 5]
    
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
    
})