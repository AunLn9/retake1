function sameNumbers(numArray1, numArray2) {
    const allNumbers = [...new Set([...numArray1, ...numArray2])];
    return allNumbers;
}

console.log(sameNumbers([1,2,3,4,5,2,1,4,1,5,2,5,8],[1,2,5,8,4,1,5,1,47,2,3,56,5,8]));
