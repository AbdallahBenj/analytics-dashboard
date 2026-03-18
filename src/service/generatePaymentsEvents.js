import getTimeAgo from "../utils/getTimeAgo.js";

const generatePaymentsEvents = (paymentsData = []) => {
  console.log("paymentsData:", paymentsData);

  const getPaymentsEventsDate = (payment) =>
    payment.paymentStatus === "paid"
      ? new Date(payment.paidAt)
      : new Date(payment.invoiceStart);

  const lastEvents = (eventsData = [], getEventDate, num = 5) =>
    [...eventsData]
      .map((event) => ({
        id: event.id,
        span2: new Date(event.paidAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        span3: `${event.invoicePrice}$`,
        span4: event.paymentStatus,
        span1: getTimeAgo(getEventDate(event)),
      }))
      .sort((a, b) => getEventDate(b) - getEventDate(a))
      .slice(0, num);

  const lastPayments = lastEvents(paymentsData, getPaymentsEventsDate, 10);
  const lastPaymentsEvents = {
    eventsTitle: ["time", "Paid At", "Invoice Price", "Invoice Status"],
    events: lastPayments,
  };

  console.log("lastPaymentsEvents:", lastPaymentsEvents);

  return lastPaymentsEvents;
};

export default generatePaymentsEvents;
