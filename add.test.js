const sum = require('./add.js');

//FIRST UNIT TEST
//sum of 1 and 2 is 3



//test is a method from jest
test('sum of 1 and 2 is 3', () => {
    //where we actually test stuff!!
    //expectations
    expect(sum(1,2)).toBe(3);
})

test('sum of -1 and 2', () => {
    expect(sum(-1, 2)).toBe(1);
})

test('sum of 1.5 and 0.5', () => {
    expect(sum(1.5, 0.5)).toBe(2);
})

test('only get one number', () => {
    expect(sum(5)).toBe(5);
})

test('string of `1` and `2`', () => {
    expect(sum('1', '2')).toBe(3);
})