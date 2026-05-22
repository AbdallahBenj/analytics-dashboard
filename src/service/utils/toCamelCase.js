const toCamelCase = (str) => {
  const camelCase = str.replaceAll(/_([a-z])/g, (_, char) => {
    return char.toUpperCase();
  });

  return camelCase;
};

const convertKeysToCamelCase = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [toCamelCase(key), value]),
  );
};

export default convertKeysToCamelCase;
