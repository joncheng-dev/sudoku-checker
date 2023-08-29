
export default function occurenceArray(arrayOfNumbers) {
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




