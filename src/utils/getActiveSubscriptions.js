const getActiveSubscriptions = (subscriptions = []) => {
  const activeSubscriptions = subscriptions.filter(
    (subscription) => subscription.subscriptionStatus === "active",
  );

  return activeSubscriptions;
};

export default getActiveSubscriptions;
