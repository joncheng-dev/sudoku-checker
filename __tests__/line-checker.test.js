import occurenceArray from './../src/line-checker.js';

describe('occurenceArray', () => {

  test('It should loop through an array of numbers and count the occurences of each number 1-9, and return an array of those occurences', () => {
    let apple = [5, 3, 4, 6, 7, 8, 9, 1, 2];
    let result = occurenceArray(apple);  
    expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1]); 
});
});