const getActiveSubscriptions = (subscriptions = []) => {
  const activeSubscriptions = subscriptions.filter(
    (subscription) => subscription.subsStatus === "active",
  );

  return activeSubscriptions;
};

export default getActiveSubscriptions;
