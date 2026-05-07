import getActiveSubscriptions from "./getActiveSubscriptions.js";

import type { OverviewUsersByPlanType } from "../../types/featuresTypes.ts";

import type { User, Subscription } from "../../types/dataTypes.js";

type PlanKey = "free" | "basic" | "pro";

const getUsersByPlan = (
  users: User[] = [],
  subscriptions: Subscription[] = [],
  pieColors: Record<PlanKey, string>,
): OverviewUsersByPlanType[] => {
  const totalUsers = users.length;
  const activeSubs = getActiveSubscriptions(subscriptions);

  const totalUsersPlans: Record<PlanKey, number> = {
    free: totalUsers - activeSubs.length,
    basic: 0,
    pro: 0,
  };

  activeSubs.forEach((sub) => {
    if (sub.subsPlan === "basic" || sub.subsPlan === "pro") {
      totalUsersPlans[sub.subsPlan]++;
    }
  });

  const order: Record<PlanKey, number> = { free: 0, basic: 1, pro: 2 };

  const usersByPlan = (Object.entries(totalUsersPlans) as [PlanKey, number][])
    .map(([plan, total]) => ({
      name: plan,
      value: total,
      fill: pieColors[plan],
    }))
    .sort((a, b) => order[a.name] - order[b.name]);

  return usersByPlan;
};

export default getUsersByPlan;
