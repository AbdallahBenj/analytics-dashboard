const toSnakeCase = (str) => {
  const snakeCase = str
    .replaceAll(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .toLowerCase();

  return snakeCase;
};

const convertKeysToSnakeCase = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [toSnakeCase(key), value]),
  );
};

export default convertKeysToSnakeCase;
