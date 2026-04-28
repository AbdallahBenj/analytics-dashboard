const getTimeAgo = (date: Date): string => {
  const now = Date.now();
  const past = new Date(date).getTime();
  const period = now - past;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  const plural = (value: number): string => (value > 1 ? "s" : "");

  if (period >= year) {
    const value = Math.floor(period / year);
    return `${value} year${plural(value)} ago`;
  }
  if (period >= month) {
    const value = Math.floor(period / month);
    return `${value} month${plural(value)} ago`;
  }
  if (period >= day) {
    const value = Math.floor(period / day);
    return `${value} day${plural(value)} ago`;
  }
  if (period >= hour) {
    const value = Math.floor(period / hour);
    return `${value} hour${plural(value)} ago`;
  }
  if (period >= minute) {
    const value = Math.floor(period / minute);
    return `${value} minute${plural(value)} ago`;
  }
  if (period >= second) {
    const value = Math.floor(period / second);
    return `${value} second${plural(value)} ago`;
  }

  return "Just now";
};

export default getTimeAgo;
