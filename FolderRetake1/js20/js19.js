function sumPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150])); // 42
console.log(sumPositiveNumbers([-1, -2, -3])); // 0
console.log(sumPositiveNumbers([])); // 0
