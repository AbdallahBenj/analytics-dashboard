fetch("url")
  .then((res) => {
    if (!res.ok) throw Error("Data not found!");
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const getData = async () => {
  try {
    const res = await fetch("url");
    if (!res.ok) throw Error("Data not fond!");
    const data = res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const myPromise = new Promise((resolve, reject) => {
  const arr = ['a', 'b', 'c'];
  if (arr.length > 2) {
    resolve("we have more than 2 letters")
  }
  else reject("Letters are equal or less thn 2");
});
