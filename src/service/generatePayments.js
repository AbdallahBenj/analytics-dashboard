const generatePayments = (subscriptions = []) => {
  let id = 0;

  // Generate monthly payment records for each subscription.

  const payments = subscriptions
    .filter((sub) => sub.priceMonthly > 0 && sub.duration > 0)
    .flatMap((sub) => {
      const dateStart = new Date(sub.startDate);

      // Set invoice start and end dates for each month

      const invoiceStart = new Date(dateStart);

      const invoiceEnd = new Date(dateStart);
      invoiceEnd.setMonth(invoiceEnd.getMonth() + 1);

      const nextInvoice = new Date(invoiceEnd);

      const setNextMonthInvoice = (date) => date.setMonth(date.getMonth() + 1);

      // Create one invoice per billing cycle (monthly)

      return Array.from({ length: sub.duration }, (_, index) => {
        const invoiceNumber = index + 1;
        const isLastInvoice = index === sub.duration - 1;

        let paymentStatus;

        // Normalize dates to avoid time comparison issues

        const toDay = new Date();
        toDay.setHours(0, 0, 0, 0);
        const start = new Date(invoiceStart);
        start.setHours(0, 0, 0, 0);
        const end = new Date(invoiceEnd);
        end.setHours(0, 0, 0, 0);

        // Determine payment status based on today's date

        const paidDate = new Date(invoiceStart);
        paidDate.setDate(paidDate.getDate() + Math.floor(Math.random() * 3));

        if (start > toDay) {
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
            paidDate < toDay
              ? paidDate.toISOString().slice(0, 10)
              : toDay.toISOString().slice(0, 10);
        } else {
          paidAt = null;
        }

        const payment = {
          id: `pay_${++id}`,
          subscriptionId: sub.id,
          invoicePrice: sub.priceMonthly,
          invoiceNumber: invoiceNumber,
          paymentStatus: paymentStatus,
          paidAt: paidAt,
          invoiceStart: invoiceStart.toISOString().slice(0, 10),
          invoiceEnd: invoiceEnd.toISOString().slice(0, 10),
          // Hide nextInvoice when reaching the final billing month
          nextInvoice: !isLastInvoice
            ? nextInvoice.toISOString().slice(0, 10)
            : null,
        };

        setNextMonthInvoice(invoiceStart);
        setNextMonthInvoice(invoiceEnd);
        setNextMonthInvoice(nextInvoice);

        return payment;
      });
    });

  return payments;
};

export default generatePayments;
