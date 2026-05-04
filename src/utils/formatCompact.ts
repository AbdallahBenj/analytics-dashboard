// NOT USED YET

const formatCompact = (number: number, fractionDigits = 0): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(number);
};

export default formatCompact;
