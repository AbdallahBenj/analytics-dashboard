import type { Timeline, Payment } from "../../types/dataTypes.js";
import type { Revenue } from "../../types/utilsTypes.js";

type Slices = {
  day: number;
  month: number;
  year: number;
};
type SlicesKey = keyof Slices;

type PlanKey = "general" | "basic" | "pro";
type RevenueMap = Record<string, Partial<Record<PlanKey, number>>>;

const getRevenue = (
  timeData: Timeline[] = [],
  payments: Payment[] = [],
  time: SlicesKey = "day",
): Revenue[] => {
  if (timeData.length === 0 || payments.length === 0) return [];
  const revenue: RevenueMap = {};

  const slices: Slices = {
    day: 10,
    month: 7,
    year: 4,
  };

  const slice: number = slices[time] ?? 10;

  const getPlanKey = (plan?: string): PlanKey => {
    if (plan === "pro" || plan === "basic") return plan;
    return "general";
  };

  for (const payment of payments) {
    if (
      payment.paymentStatus !== "paid" ||
      !payment.paidAt ||
      payment.invoicePrice == null
    )
      continue;

    const amount = Number(payment.invoicePrice);
    if (Number.isNaN(amount)) continue;

    const date = new Date(payment.paidAt);
    const dateKey = date.toISOString().slice(0, slice);

    const planKey = getPlanKey(payment.subscriptionPlan);

    revenue[dateKey] ??= {};

    revenue[dateKey][planKey] =
      (revenue[dateKey][planKey] ?? 0) + Number(payment.invoicePrice);
  }

  for (const day of timeData) {
    const dateKey = new Date(day.date).toISOString().slice(0, slice);

    revenue[dateKey] ??= {};
  }

  const result = Object.entries(revenue)
    .map(([key, value]) => ({
      date: key,
      revenue: (value.basic ?? 0) + (value.pro ?? 0),
      basicRevenue: value.basic ?? 0,
      proRevenue: value.pro ?? 0,
    }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => ({
      ...item,
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        ...(time === "day" && { day: "numeric" }),
        ...(time === "year" && { year: "numeric" }),
      }),
    }));

  return result;
};

export default getRevenue;
