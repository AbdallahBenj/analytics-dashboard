import type { Subscription } from "../../types/dataTypes.js";

const getActiveSubscriptions = (
  subscriptions: Subscription[] = [],
): Subscription[] => {
  const activeSubscriptions = subscriptions.filter(
    (subscription) => subscription.subscriptionStatus === "active",
  );

  return activeSubscriptions;
};

export default getActiveSubscriptions;
