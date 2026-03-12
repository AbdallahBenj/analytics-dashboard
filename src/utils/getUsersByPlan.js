import getActiveSubscriptions from "./getActiveSubscriptions.js";

const getUsersByPlan = (users = [], subscriptions = [], pieColors = {}) => {
  const totalUsers = users.length;
  const activeSubs = getActiveSubscriptions(subscriptions);

  const totalActiveSubs = activeSubs.length;

  const totalUsersPlans = {
    free: totalUsers - totalActiveSubs,
  };

  activeSubs.forEach((sub) => {
    totalUsersPlans[sub.plan] = (totalUsersPlans[sub.plan] ?? 0) + 1;
  });

  const order = { free: 0, basic: 1, pro: 2 };

  const usersByPlan = Object.entries(totalUsersPlans)
    .map(([plan, total]) => ({
      name: plan,
      value: total,
      fill: pieColors?.[plan],
    }))
    .sort((a, b) => order[a.name] - order[b.name]);
  return usersByPlan;
};

export default getUsersByPlan;
