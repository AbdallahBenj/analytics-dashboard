import type { Subscription } from "../../types/dataTypes.js";

const getActiveSubscriptions = (
  subscriptions: Subscription[] = [],
): Subscription[] => {
  const activeSubscriptions = subscriptions.filter(
    (subscription) => subscription.subsStatus === "active",
  );

  return activeSubscriptions;
};

export default getActiveSubscriptions;
