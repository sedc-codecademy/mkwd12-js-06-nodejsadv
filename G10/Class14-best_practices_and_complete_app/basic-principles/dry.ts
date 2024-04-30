function convertDenarsToEuros(denars: number): number {
  return denars / 61.5;
}

function convertEurosToDenars(euros: number): number {
  return euros * 61.5;
}

// DRY code
function convertCurrency(amount: number, toCurrency: string): number {
  if (toCurrency === "euro") return amount / 61.5;
  if (toCurrency === "denars") return amount * 61.5;
  return 0;
}
