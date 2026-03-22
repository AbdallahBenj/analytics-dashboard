const generateTimeLine = (days = 30) => {
  const toDay = new Date();
  const timeline = Array.from({ length: days }, (_, i) => {
    const date = new Date(toDay);
    date.setDate(toDay.getDate() - (days - i - 1));
    return {
      date: date.toISOString(),
    };
  });
  return timeline;
};

export default generateTimeLine;
