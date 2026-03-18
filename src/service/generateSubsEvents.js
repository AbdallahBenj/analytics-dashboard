import getTimeAgo from "../utils/getTimeAgo.js";

const generateSubsEvents = (subscriptionsData = []) => {
  //test start
  console.log("subscriptionsData:", subscriptionsData);

  // const getPaymentsEventsDate = (payment) =>
  //   payment.paymentStatus === "paid"
  //     ? new Date(payment.paidAt)
  //     : new Date(payment.invoiceStart);

  // const toDay = new Date();

  const getSubsEventDate = (sub) =>
    sub.subsStatus === "active"
      ? new Date(sub.subsStartDate)
      : new Date(sub.subsEndDate);

  const lastEvents = (eventsData = [], getEventDate, num = 5) =>
    [...eventsData]
      .map((event) => ({
        id: event.subsId,
        span2: event.userName,
        span3: event.subsPlan,
        span4: event.subsStatus,
        span1: getTimeAgo(getEventDate(event)),
      }))
      .sort((a, b) => getEventDate(b) - getEventDate(a))
      .slice(0, num);

  const lastSubs = lastEvents(subscriptionsData, getSubsEventDate, 10);
  const lastSubsEvents = {
    eventsTitle: ["Time", "User", "Plan", "Status"],
    events: lastSubs,
  };

  console.log("lastSubs:", lastSubs);
  console.log("lastSubsEvents:", lastSubsEvents);

  return lastSubsEvents;

  // test end
};

export default generateSubsEvents;
