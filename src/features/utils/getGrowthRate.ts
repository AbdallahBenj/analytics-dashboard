const getGrowthRate = (value: number, prevValue: number): number | null =>
  prevValue && prevValue !== 0 ? (value - prevValue) / prevValue : null;

export default getGrowthRate;
