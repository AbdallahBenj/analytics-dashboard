const convertToKilo = (value: number): string => {
  if (!value) return "";
  const num = Number(value) || 0;

  return num >= 1000 ? `${(num / 1000).toFixed(2)} k` : `${num}`;
};

export default convertToKilo;
