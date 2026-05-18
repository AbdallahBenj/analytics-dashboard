import getTimeAgo from "../../utils/getTimeAgo.js";
import formatCurrency from "../../utils/formatCurrency.js";

import type { Payment } from "../../types/dataTypes.js";
import type { EventsTitle, PaymentsEvents } from "../../types/eventsTypes.js";

const generatePaymentsEvents = (
  paymentsData: Payment[] = [],
): PaymentsEvents[] => {
  const eventsTitle: EventsTitle[] = [
    "Time",
    "User",
    "Paid At",
    "Invoice Price",
    "Invoice Status",
  ];

  if (!paymentsData || paymentsData.length === 0) {
    return [];
  }

  const getEventDate = (payment: Payment): Date | null => {
    if (payment.paymentStatus === "paid" && payment.paidAt) {
      return new Date(payment.paidAt);
    }
    if (payment.paymentStatus === "failed" && payment.invoiceStart) {
      return new Date(payment.invoiceStart);
    }
    return null;
  };

  type PaymentWithDate = Payment & { eventDateObj: Date | null };

  const getLatestPaymentsEvents = (eventsData: Payment[]): PaymentsEvents[] =>
    eventsData
      .filter((payment) => payment.paymentStatus !== "pending")
      .map((payment) => ({ ...payment, eventDateObj: getEventDate(payment) }))
      .sort(
        (a, b) =>
          (b.eventDateObj?.getTime() || 0) - (a.eventDateObj?.getTime() || 0),
      )
      .map(
        ({
          eventDateObj: date,
          userName,
          paymentId,
          invoicePrice,
          paymentStatus,
        }: PaymentWithDate) => ({
          paymentId,
          paymentStatus,
          userName,
          paidDate: date
            ? date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "N/A",
          invoicePrice: formatCurrency(invoicePrice, 2), //`${invoicePrice}$`
          paymentTimeAgo: date ? getTimeAgo(date) : "N/A",
        }),
      );

  const paymentsEvents = getLatestPaymentsEvents(paymentsData);
  // {
  //   eventsTitle,
  //   events: getLatestPaymentsEvents(paymentsData),
  // };

  console.log("paymentsEvents", paymentsEvents);
  return paymentsEvents;
};

export default generatePaymentsEvents;
