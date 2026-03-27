// rename it to "getRevenue"

const calculateRevenue = (timeData = [], payments = [], time = "day") => {
  if (timeData.length === 0 || payments.length === 0) return [];
  const revenue = {};

  const slices = {
    day: 10,
    month: 7,
    year: 4,
  };

  const slice = slices[time] || 10;

  payments
    .filter((payment) => payment.paymentStatus === "paid")
    .forEach((payment) => {
      if (!payment.paidAt || payment.invoicePrice == null) return;

      const invoiceDate = new Date(payment.paidAt)
        .toISOString()
        .slice(0, slice);

      revenue[invoiceDate] =
        (revenue[invoiceDate] ?? 0) + Number(payment.invoicePrice);
    });

  for (let day of timeData) {
    const date = new Date(day.date).toISOString().slice(0, slice);
    if (!(date in revenue)) revenue[date] = 0;
  }

  const revenueArr = Object.entries(revenue)
    .map(([key, value]) => {
      return {
        date: key,
        revenue: value,
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
      };
    });

  return revenueArr;
};

export default calculateRevenue;
