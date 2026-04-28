import convertToDynamicTime from "../utils/convertToDynamicTime.js";

import type { Timeline } from "../../types/dataTypes.ts";

const generateTimeLine = (days: number = 30): Timeline[] => {
  const toDay = new Date();

  const timeline = Array.from({ length: days }, (_, i) => {
    const date = convertToDynamicTime(toDay);
    date.setDate(toDay.getDate() - (days - i - 1));

    return { date: date.toISOString() };
  });

  return timeline;
};

export default generateTimeLine;
