function divide(a: any, b: any): any {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: Inputs must be numbers";
  }
  if (b === 0) {
    return "Cannot divide by 0";
  }
  return a / b;
}

console.log(divide("10", "5"));

// simplified
function divideNumbers(num1: number, num2: number): number | string {
  if (num2 === 0) {
    return "Cannot divide by 0";
  }
  return num1 / num2;
}
// console.log(divideNumbers("10", "5")); // Compiler will throw an error
