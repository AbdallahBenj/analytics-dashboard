import getActiveSubscriptions from "./getActiveSubscriptions.js";

import type {
  Timeline,
  User,
  Subscription,
  Payment,
} from "../../types/dataTypes.js";

type PieColors = {
  basic?: string;
  free?: string;
  pro?: string;
};

type PlanKey = "free" | "basic" | "pro";

const getUsersByPlan = (
  users: User[] = [],
  subscriptions: Subscription[] = [],
  pieColors: PieColors = {},
) => {
  const totalUsers = users.length;
  const activeSubs: Subscription[] = getActiveSubscriptions(subscriptions);

  const totalActiveSubs = activeSubs.length;

  const totalUsersPlans: Record<PlanKey, number> = {
    free: totalUsers - totalActiveSubs,
    basic: 0,
    pro: 0,
  };

  activeSubs.forEach((sub) => {
    const plan = sub.subsPlan as PlanKey;
    totalUsersPlans[plan] = (totalUsersPlans[plan] ?? 0) + 1;
  });

  const order: Record<PlanKey, number> = { free: 0, basic: 1, pro: 2 };

  const usersByPlan = (Object.entries(totalUsersPlans) as [PlanKey, number][])
    .map(([plan, total]) => ({
      name: plan,
      value: total,
      fill: pieColors?.[plan],
    }))
    .sort((a, b) => order[a.name] - order[b.name]);
  return usersByPlan;
};

export default getUsersByPlan;
