function calculateSquareRoot(num: number): string | number {
  let result;
  if (num >= 0) {
    result = Math.sqrt(num);
  } else {
    result = "Cannot calculate the square root of a negative number";
  }
  return result;
}

// simplified
function calculateSquareRootSimplified(num: number): string | number {
  if (num < 0) {
    return "Cannot calculate the square root of a negative number";
  }
  return Math.sqrt(num);
}
