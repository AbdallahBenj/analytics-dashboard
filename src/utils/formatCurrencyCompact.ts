const formatCurrencyCompact = (number: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    notation: "compact",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

export default formatCurrencyCompact;
