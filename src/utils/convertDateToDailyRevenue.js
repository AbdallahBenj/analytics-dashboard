const convertDateToDailyRevenue = (arr = []) => {
  const dailyData = arr.map((obj) => {
    const dateObj = new Date(obj.date);

    return {
      ...obj,
      date: dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
  });
  return dailyData;
};

export default convertDateToDailyRevenue;
