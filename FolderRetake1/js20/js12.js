function uniqueElements(arrayValue) {
    let uniqueArray = [...new Set(arrayValue)];
    return uniqueArray;
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
numbers = uniqueElements(numbers);
console.log(numbers);
