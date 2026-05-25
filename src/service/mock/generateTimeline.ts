import toDynamicTime from "../utils/toDynamicTime.js";

import type { Timeline } from "../../types/dataTypes.js";

const generateTimeline = (days: number = 30): Timeline[] => {
  const toDay = new Date();

  const timeline = Array.from({ length: days }, (_, i) => {
    const date = toDynamicTime(toDay);
    date.setDate(toDay.getDate() - (days - i - 1));

    return { date: date.toISOString() };
  });

  return timeline;
};

export default generateTimeline;
