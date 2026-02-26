const calculateRevenue = (payments = [], time = "day") => {
  const revenue = {};

  let slice = 10; // daily
  if (time === "month") slice = 7; // monthly
  if (time === "year") slice = 4; // yearly

  payments.forEach((payment) => {
    if (!payment.invoiceStart || !payment.invoicePrice) return;

    const invoiceDate = new Date(payment.invoiceStart)
      .toISOString()
      .slice(0, slice);

    if (!revenue[invoiceDate]) revenue[invoiceDate] = 0;
    revenue[invoiceDate] += Number(payment.invoicePrice);
  });

  return revenue;
};

export default calculateRevenue;
