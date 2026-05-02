// NOT USED YET

const formatCompact = (number: number): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export default formatCompact;
