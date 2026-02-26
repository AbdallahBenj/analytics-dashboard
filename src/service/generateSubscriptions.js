const generateSubscriptions = (users = []) => {
  const plans = [
    { id: "p-1", name: "free", price: 0, billing: null },
    { id: "p-2", name: "basic", price: 5, billing: "monthly" },
    { id: "p-3", name: "pro", price: 10, billing: "monthly" },
  ];

  const toDay = new Date();

  // Generate subscription record for each user

  const subscriptions = users.map((user, i) => {
    const plansIndex = Math.floor(Math.random() * plans.length);
    const plan = plans[plansIndex];
    const isFreePlan = plan.price === 0;

    // Compute how many days user existed before today

    const createdDate = new Date(user.createdAt);
    const startDelay = (toDay - createdDate) / (1000 * 60 * 60 * 24);

    // Random offset to simulate real subscription start timing

    const offsetDays =
      startDelay > 0 ? Math.floor(Math.random() * startDelay) : 0;

    let startDate = new Date(createdDate);
    startDate.setDate(startDate.getDate() + offsetDays);

    // Ensure start date never exceeds today

    if (startDate > toDay) startDate = new Date(toDay);

    // Calculate how many months subscription could have existed

    let months =
      (toDay.getFullYear() - startDate.getFullYear()) * 12 +
      (toDay.getMonth() - startDate.getMonth()) +
      (toDay.getDate() >= startDate.getDate() ? 1 : 0);

    const availableMonths = Math.max(0, months);

    let randomlyDuration;
    let durationMonths;
    if (isFreePlan) {
      durationMonths = 0;
      randomlyDuration = 0;
    } else if (availableMonths === 0) {
      durationMonths = 1;
    } else {
      randomlyDuration = Math.floor(Math.random() * availableMonths) + 1;
      durationMonths = Math.max(1, randomlyDuration);
    }

    // Compute subscription end date from duration

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + durationMonths);

    // Determine subscription status

    let subStatus;

    if (isFreePlan) {
      subStatus = "free";
    } else if (endDate < toDay) {
      subStatus = "canceled";
    } else {
      subStatus = "active";
    }

    return {
      id: `sub_${i}`,
      userId: user.id,
      createdAt: createdDate.toISOString(),
      startDate: !isFreePlan ? startDate.toISOString() : null,
      endDate: !isFreePlan ? endDate.toISOString() : null,
      duration: durationMonths,
      plan: plan.name,
      priceMonthly: plan.price,
      subscriptionStatus: subStatus,
    };
  });

  return subscriptions;
};

export default generateSubscriptions;
