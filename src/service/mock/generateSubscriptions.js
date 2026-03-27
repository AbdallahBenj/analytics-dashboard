import convertToDynamicTime from "../utils/convertToDynamicTime.js";

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

    if (isFreePlan) return;

    // Compute how many days user existed before today

    const createdDate = new Date(user.userCreatedAt);
    const userAgeInDays = Math.floor(
      (toDay - createdDate) / (1000 * 60 * 60 * 24),
    );

    // Random offset to simulate real subscription start timing

    const offsetDays =
      userAgeInDays > 0 ? Math.floor(Math.random() * userAgeInDays) : 0;

    // Subscription start date
    let startDate = new Date(createdDate);
    startDate.setDate(startDate.getDate() + offsetDays);

    // Dynamic time for each date

    let subStartDate = convertToDynamicTime(startDate);

    // Ensure start date never exceeds today

    if (subStartDate > toDay) subStartDate = new Date(toDay);

    // Calculate how many months subscription could have existed

    let months =
      (toDay.getFullYear() - subStartDate.getFullYear()) * 12 +
      (toDay.getMonth() - subStartDate.getMonth()) +
      (toDay.getDate() >= subStartDate.getDate() ? 1 : 0);

    const availableMonths = Math.max(0, months);

    const durationMonths =
      availableMonths === 0
        ? 1
        : Math.floor(Math.random() * availableMonths) + 1;

    // Compute subscription end date from duration
    const endDate = new Date(subStartDate);
    endDate.setMonth(endDate.getMonth() + durationMonths);

    // Determine subscription status

    const subStatus = endDate < toDay ? "canceled" : "active";

    return {
      subsId: `sub_${i}`,
      userId: user.userId,
      userName: user.userName,
      userCreatedAt: user.userCreatedAt,
      subsStartDate: subStartDate.toISOString(),
      subsEndDate: endDate.toISOString(),
      subsDuration: durationMonths,
      subsPlan: plan.name,
      priceMonthly: plan.price,
      subsStatus: subStatus,
    };
  });

  console.log("subscriptions:", subscriptions.filter(Boolean));
  return subscriptions.filter(Boolean);
};

export default generateSubscriptions;
