import getTimeAgo from "../../utils/getTimeAgo.js";

const generatePaymentsEvents = (paymentsData = [], limit = 10) => {
  const eventsTitle = ["time", "Paid At", "Invoice Price", "Invoice Status"];

  if (!paymentsData || paymentsData.length === 0) {
    return { eventsTitle, events: [] };
  }

  const getEventDate = (payment) => {
    const eventDate =
      payment.paymentStatus === "paid"
        ? payment.paidAt
        : payment.paymentStatus === "failed"
          ? payment.invoiceStart
          : null;

    return eventDate ? new Date(eventDate) : null;
  };

  const lastEvents = (eventsData = []) =>
    eventsData
      .filter((payment) => payment.paymentStatus !== "pending")
      .map((payment) => ({ ...payment, eventDateObj: getEventDate(payment) }))
      .sort((a, b) => (b.eventDateObj || 0) - (a.eventDateObj || 0))
      .slice(0, limit)
      .map(
        ({ eventDateObj: date, paymentId, invoicePrice, paymentStatus }) => ({
          paymentId,
          paymentStatus,
          paidDate: date
            ? date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "N/A",
          invoicePrice: `${invoicePrice}$`,
          paymentTimeAgo: date ? getTimeAgo(date) : "N/A",
        }),
      );

  const lastPaymentsEvents = { eventsTitle, events: lastEvents(paymentsData) };
  return lastPaymentsEvents;
};

export default generatePaymentsEvents;
