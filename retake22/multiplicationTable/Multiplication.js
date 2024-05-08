
export class Multiplication {
  constructor(num) {
    this.num = num; 
  }

  getArrayOfMultiplicationTable() {
    const arrayMultiplication = [];
    for (let i = 1; i <= 12; i++) {
      arrayMultiplication.push({
        operand1: this.num,
        operand2: i, 
        operator: "x", 
        result: this.num * i, 
      });
    }
    return arrayMultiplication; 
  }
}
