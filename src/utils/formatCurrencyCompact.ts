const formatCurrencyCompact = (number: number, fractionDigits = 0): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    notation: "compact",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(number);

export default formatCurrencyCompact;
