const convertToKilo = (value) =>
  value >= 1000 ? `${(value / 1000).toFixed(2)} k` : value;

export default convertToKilo;
