import { supabase } from "../../lib/supabase.js";

import {
  timeline,
  users,
  subscriptions,
  payments,
} from "../mock/generateData.js";

import {
  usersEvents,
  subscriptionsEvents,
  paymentsEvents,
} from "../events/generateEvents.js";

const isEnableInsertData = false;

const insertDataType = async (dataType, table) => {
  const { data, error } = await supabase
    .from(table)
    .upsert(dataType)
    .select("*");

  if (error) {
    console.log("error", error);
    return;
  }
  console.log("success", data);
  return data;
};

const addDataType = async (dataType, table) => {
  console.log("START dataPart INSERT");

  for (let i = 0; i < dataType.length; i += 500) {
    let dataPart = dataType.slice(i, i + 500);
    console.log("dataPart", `${i} - ${i + dataPart.length}`);
    await insertDataType(dataPart, table);
  }

  console.log("END dataPart INSERT");
};

const insertSupabaseData = async () => {
  // Convert table columns from camelCase to snake_case

  const formattedUser = users.map((user) => ({
    user_id: user.userId,
    user_name: user.userName,
    user_country: user.userCountry,
    user_email: user.userEmail,
    user_created_at: user.userCreatedAt,
  }));

  const formattedSubscriptions = subscriptions.map((subscription) => ({
    user_id: subscription.userId,
    user_name: subscription.userName,
    user_created_at: subscription.userCreatedAt,
    subscription_id: subscription.subscriptionId,
    subscription_start_date: subscription.subscriptionStartDate,
    subscription_end_date: subscription.subscriptionEndDate,
    subscription_duration: subscription.subscriptionDuration,
    subscription_plan: subscription.subscriptionPlan,
    price_monthly: subscription.priceMonthly,
    subscription_status: subscription.subscriptionStatus,
  }));

  const formattedPayments = payments.map((payment) => ({
    payment_id: payment.paymentId,
    user_id: payment.userId,
    user_name: payment.userName,
    subscription_id: payment.subscriptionId,
    subscription_plan: payment.subscriptionPlan,
    invoice_price: payment.invoicePrice,
    invoice_number: payment.invoiceNumber,
    payment_status: payment.paymentStatus,
    paid_at: payment.paidAt,
    invoice_start: payment.invoiceStart,
    invoice_end: payment.invoiceEnd,
  }));

  const formattedUsersEvents = usersEvents.map((usersEvent) => ({
    user_id: usersEvent.userId,
    user_name: usersEvent.userName,
    user_email: usersEvent.userEmail,
    event_date: usersEvent.eventDate,
  }));

  const formattedSubscriptionsEvents = subscriptionsEvents.map(
    (subscriptionsEvent) => ({
      user_name: subscriptionsEvent.userName,
      subscription_id: subscriptionsEvent.subscriptionId,
      subscription_plan: subscriptionsEvent.subscriptionPlan,
      subscription_status: subscriptionsEvent.subscriptionStatus,
      event_date: subscriptionsEvent.eventDate,
    }),
  );

  const formattedPaymentsEvents = paymentsEvents.map((paymentsEvent) => ({
    payment_id: paymentsEvent.paymentId,
    payment_status: paymentsEvent.paymentStatus,
    user_name: paymentsEvent.userName,
    event_date: paymentsEvent.eventDate,
    invoice_price: paymentsEvent.invoicePrice,
  }));

  if (!isEnableInsertData) return;
  console.log("START ALLData INSERT");
  await addDataType(timeline, "timeline");
  await addDataType(formattedUser, "users");
  await addDataType(formattedSubscriptions, "subscriptions");
  await addDataType(formattedPayments, "payments");

  await addDataType(formattedUsersEvents, "users_events");
  await addDataType(formattedSubscriptionsEvents, "subscriptions_events");
  await addDataType(formattedPaymentsEvents, "payments_events");

  console.log("END ALLData INSERT");
};

export default insertSupabaseData;
