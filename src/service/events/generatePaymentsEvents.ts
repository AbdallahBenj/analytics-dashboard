import getTimeAgo from "../../utils/getTimeAgo.js";
import toNumberCurrency from "../../utils/toNumberCurrency.js";

import type { Payment } from "../../types/dataTypes.js";
import type { EventsTitle, PaymentsEvents } from "../../types/eventsTypes.js";

const generatePaymentsEvents = (
  paymentsData: Payment[] = [],
  limit: number = 10,
): { eventsTitle: EventsTitle[]; events: PaymentsEvents[] } => {
  const eventsTitle: EventsTitle[] = [
    "Time",
    "User",
    "Paid At",
    "Invoice Price",
    "Invoice Status",
  ];

  if (!paymentsData || paymentsData.length === 0) {
    return { eventsTitle, events: [] };
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
      .slice(0, limit)
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
          invoicePrice: toNumberCurrency(invoicePrice), //`${invoicePrice}$`
          paymentTimeAgo: date ? getTimeAgo(date) : "N/A",
        }),
      );

  const paymentsEvents = {
    eventsTitle,
    events: getLatestPaymentsEvents(paymentsData),
  };
  return paymentsEvents;
};

export default generatePaymentsEvents;
