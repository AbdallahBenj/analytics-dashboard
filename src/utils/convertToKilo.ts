const convertToKilo = (value: number): string => {
  if (!value) return "";
  const num = Number(value) || 0;

  // console.log("value", value, typeof value);
  // console.log(
  //   "return",
  //   num >= 1000 ? `${(num / 1000).toFixed(2)} k` : `${num}`,
  //   typeof (num >= 1000 ? `${(num / 1000).toFixed(2)} k` : `${num}`),
  // );

  return num >= 1000 ? `${(num / 1000).toFixed(2)} k` : `${num}`;
};

export default convertToKilo;
