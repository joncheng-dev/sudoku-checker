
export function occurenceArray(arrayOfNumbers) {
    let result = [];
    for (let i = 1; i<=9; i++) {
    let counter = 0;
    arrayOfNumbers.forEach(function(number){
        if (number === i){
            counter += 1;
        }
    });
    result.push(counter);
    }
    return result;
}

export function lineChecker(result) {
    let comparisonArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    if (comparisonArray.toString() === result.toString()) {
        return true;
    } else {
        return false;
    }
}






