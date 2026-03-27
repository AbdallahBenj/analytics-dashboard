import convertToDynamicTime from "../utils/convertToDynamicTime.js";

const generatePayments = (subscriptions = []) => {
  let id = 0;
  const toDay = new Date();

  // Generate monthly payment records for each subscription.

  const payments = subscriptions
    .filter((sub) => sub.priceMonthly > 0 && sub.subsDuration > 0)
    .flatMap((sub) => {
      const dateStart = new Date(sub.subsStartDate);

      // Create one invoice per billing cycle (monthly)

      return Array.from({ length: sub.subsDuration }, (_, index) => {
        const invoiceNumber = index + 1;

        // Set invoice start and end dates for each month

        const invoiceStart = new Date(dateStart);
        invoiceStart.setMonth(invoiceStart.getMonth() + index);

        const invoiceEnd = new Date(invoiceStart);
        invoiceEnd.setMonth(invoiceEnd.getMonth() + 1);

        let paymentStatus;

        // Determine payment status based on today's date

        const paidDate = convertToDynamicTime(invoiceStart);
        paidDate.setDate(paidDate.getDate() + Math.floor(Math.random() * 3));

        if (invoiceStart > toDay) {
          paymentStatus = "pending";
        } else {
          const random = Math.random();

          if (random > 0.1) paymentStatus = "paid";
          else if (random > 0.05) paymentStatus = "pending";
          else paymentStatus = "failed";
        }

        let paidAt;
        if (paymentStatus === "paid") {
          paidAt =
            paidDate < toDay ? paidDate.toISOString() : toDay.toISOString();
        } else {
          paidAt = null;
        }

        const payment = {
          paymentId: `pay_${++id}`,
          userId: sub.userId,
          userName: sub.userName,
          subscriptionId: sub.subsId,
          invoicePrice: sub.priceMonthly,
          invoiceNumber: invoiceNumber,
          paymentStatus: paymentStatus,
          paidAt: paidAt,
          invoiceStart: invoiceStart.toISOString(),
          invoiceEnd: invoiceEnd.toISOString(),
        };

        return payment;
      });
    });

  console.log("payments:", payments);
  return payments;
};

export default generatePayments;
