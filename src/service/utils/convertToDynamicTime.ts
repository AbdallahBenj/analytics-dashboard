// rename it to "getDynamicDateTime"

const convertToDynamicTime = (date: Date): Date => {
  const newDate = new Date(date);

  newDate.setHours(Math.floor(Math.random() * 24));
  newDate.setMinutes(Math.floor(Math.random() * 60));
  newDate.setSeconds(Math.floor(Math.random() * 60));
  newDate.setMilliseconds(Math.floor(Math.random() * 1000));

  return newDate;
};

export default convertToDynamicTime;
