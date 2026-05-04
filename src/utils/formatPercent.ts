const formatPercent = (number: number, fractionDigits: number = 0): string => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(number);
};

export default formatPercent;
