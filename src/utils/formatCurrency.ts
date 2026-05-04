// NOT USED YET

const formatCurrency = (number: number, fractionDigits = 0): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(number);
};

export default formatCurrency;
