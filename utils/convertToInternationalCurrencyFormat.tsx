export function convertToInternationalCurrencySystem(labelValue: string) {
  // Nine Zeroes for Billions
  let currentValue = parseInt(labelValue);
  return Math.abs(Number(currentValue)) >= 1.0e9
    ? (Math.abs(Number(currentValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(currentValue)) >= 1.0e6
    ? (Math.abs(Number(currentValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(currentValue)) >= 1.0e3
    ? (Math.abs(Number(currentValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(currentValue)).toFixed(2);
}
