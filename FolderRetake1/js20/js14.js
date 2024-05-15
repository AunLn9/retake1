function reverseArray(arrayValue) {
    let reversedArray = [];
    for (let i = arrayValue.length - 1; i >= 0; i--) {
        reversedArray.push(arrayValue[i]);
    }
    return reversedArray;
}

let numbers = [1, 1, 3, 8, 21, 8, 13, 3, 8, 7];
numbers = reverseArray(numbers);
console.log(numbers);
