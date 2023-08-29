import {occurenceArray} from './../src/line-checker.js';
import {lineChecker} from './../src/line-checker.js';

describe('occurenceArray', () => {

  test('It should loop through an array of numbers and count the occurences of each number 1-9, and return an array of those occurences', () => {
    let apple = [5, 3, 4, 6, 7, 8, 9, 1, 2];
    let result = occurenceArray(apple);  
    expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1]); 
});
});

describe('lineChecker', () => {
    test('It should take an array of 9 elements, and return true if all 9 values are 1.', () => {
        let result = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        let booleanReturned = lineChecker(result);
        expect(booleanReturned).toEqual(true);
    });

    test('It should compare 2 arrays and if their values are not equal return false.', () => {
        let result = [1, 1, 1, 1, 2, 2, 2, 2, 2];
        let booleanReturned = lineChecker(result);
        expect(booleanReturned).toEqual(false);
    });
});

