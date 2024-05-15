const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr = [1, 2, 3, 4]; // Error: Assignment to constant variable.

const obj = { name: 'Alice' };
obj.age = 30; // { name: 'Alice', age: 30 }
obj = { name: 'Alice', age: 30 }; // Error: Assignment to constant variable.
