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

        if (end < toDay) {
          paymentStatus = "paid";
        } else if (start <= toDay && end >= toDay) {
          paymentStatus = "active";
        } else paymentStatus = "pending";

        const payment = {
          id: `pay_${++id}`,
          subscriptionId: sub.id,
          invoicePrice: sub.priceMonthly,
          invoiceNumber: invoiceNumber,
          paymentStatus: paymentStatus,
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
