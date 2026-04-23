const getRevenue = (timeData = [], payments = [], time = "day") => {
  if (timeData.length === 0 || payments.length === 0) return [];
  const revenue = {};

  const slices = {
    day: 10,
    month: 7,
    year: 4,
  };

  const slice = slices[time] || 10;

  const addPlanRevenue = (payments = [], plan = "") => {
    return payments
      .filter((payment) =>
        !plan
          ? payment.paymentStatus === "paid"
          : payment.paymentStatus === "paid" &&
            payment.subscriptionPlan === plan,
      )
      .forEach((payment) => {
        if (!payment.paidAt || payment.invoicePrice == null) return;

        const invoiceDate = new Date(payment.paidAt)
          .toISOString()
          .slice(0, slice);

        revenue[invoiceDate] = {
          ...revenue[invoiceDate],
          [!plan ? "general" : plan]:
            (revenue[invoiceDate]?.[!plan ? "general" : plan] ?? 0) +
            Number(payment.invoicePrice),
        };
      });
  };

  addPlanRevenue(payments);
  addPlanRevenue(payments, "pro");
  addPlanRevenue(payments, "basic");

  for (let day of timeData) {
    const date = new Date(day.date).toISOString().slice(0, slice);
    if (!(date in revenue)) revenue[date] = {};
  }

  const revenueArr = Object.entries(revenue)
    .map(([key, value]) => {
      return {
        date: key,
        revenue: value.general || 0,
        basicRevenue: value.basic || 0,
        proRevenue: value.pro || 0,
      };
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((obj) => {
      return {
        date: new Date(obj.date).toLocaleDateString("en-us", {
          month: "short",
          ...(time === "day" && { day: "numeric" }),
        }),
        revenue: obj.revenue,
        basicRevenue: obj.basicRevenue,
        proRevenue: obj.proRevenue,
      };
    });

  return revenueArr;
};

export default getRevenue;
