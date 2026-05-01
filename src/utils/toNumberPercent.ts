// NOT USED YET

const toNumberPercent = (number: number): string => {
  return new Intl.NumberFormat("en-US", { style: "percent" }).format(number);
};

export default toNumberPercent;
