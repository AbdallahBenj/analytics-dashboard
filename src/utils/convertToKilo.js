const convertToKilo = (value) => {
  if (!value) return 0;
  const num = Number(value) || 0;
  return num >= 1000 ? `${(num / 1000).toFixed(2)} k` : num;
};

export default convertToKilo;
