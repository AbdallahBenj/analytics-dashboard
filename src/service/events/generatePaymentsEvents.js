import getTimeAgo from "../../utils/getTimeAgo.js";

const generatePaymentsEvents = (paymentsData = []) => {
  if (!paymentsData || paymentsData.length === 0) {
    return {
      eventsTitle: ["time", "Paid At", "Invoice Price", "Invoice Status"],
      events: [],
    };
  }

  const getEventDate = (payment) => {
    const eventDate =
      payment.paymentStatus === "paid" ? payment.paidAt : payment.invoiceStart;
    return new Date(eventDate);
  };

  const lastEvents = (eventsData = [], num = 5) =>
    [...eventsData]
      .sort((a, b) => getEventDate(b) - getEventDate(a))
      .slice(0, num)
      .map((event) => {
        const date = getEventDate(event);
        const paidDate = new Date(event.paidAt);
        return {
          paymentId: event.paymentId,
          paidDate: paidDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          invoicePrice: `${event.invoicePrice}$`,
          paymentStatus: event.paymentStatus,
          paymentTimeAgo: getTimeAgo(date),
        };
      });

  const lastPayments = lastEvents(paymentsData, 10);
  const lastPaymentsEvents = {
    eventsTitle: ["time", "Paid At", "Invoice Price", "Invoice Status"],
    events: lastPayments,
  };

  return lastPaymentsEvents;
};

export default generatePaymentsEvents;
