const testFunction = () => {
  const users = [
    { id: 1, plan: "pro" },
    { id: 2, plan: "basic" },
    { id: 3, plan: "pro" },
  ];

  const payments = [
    { userId: 1, amount: 20 },
    { userId: 3, amount: 20 },
    { userId: 2, amount: 10 },
  ];

  const usersPlan = {};

  for (let user of users) {
    usersPlan[user.id] = user.plan;
  }

  const paymentPlan = {};

  for (let payment of payments) {
    const plan = usersPlan[payment.userId];
    paymentPlan[plan]
      ? (paymentPlan[plan] += Number(payment.amount))
      : (paymentPlan[plan] = Number(payment.amount));
  }

  return paymentPlan;
};

export default testFunction;
