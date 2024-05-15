const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
const last = numbers[numbers.length - 1];

console.log(first); // 1
console.log(second); // 2
console.log(last); // 5
