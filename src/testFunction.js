async () => {
  try {
    let loading = true;
    await new Promise(() => setTimeout(console.log("time"), 1000));
  } catch (err) {
    console.log(err);
  } finally {
    loading = false;
  }
};
