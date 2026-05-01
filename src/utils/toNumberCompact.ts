// NOT USED YET

const toNumberCompact = (number: number): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
};

export default toNumberCompact;
