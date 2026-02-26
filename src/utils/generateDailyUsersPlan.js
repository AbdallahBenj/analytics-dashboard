// Not Active

const generateDailyUsersPlan = (days = 7) => {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));
    return {
      date: date,
      user: "",
      plan: "",
      action: "",
    };
  });
};

export default generateDailyUsersPlan;
