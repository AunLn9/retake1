function isLeapYear(year) {
    // Solution 1
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }

    // Solution 2
    if (year % 4 === 0) {
      if (year % 100 ===0 ) {
        return year % 400 === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }

// Solution 3
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // Should print true
console.log(isLeapYear(1900)); // Should print false
console.log(isLeapYear(2000)); // Should print true
console.log(isLeapYear(2021)); // Should print false
