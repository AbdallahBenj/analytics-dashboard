type Timeline = { date: string };

type User = {
  userId: string;
  userName: string;
  userCountry: string;
  userEmail: string;
  userCreatedAt: string;
};

type Subscription = {
  userId: string;
  userName: string;
  userCreatedAt: string;
  subscriptionId: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  subscriptionDuration: number;
  subscriptionPlan: string;
  priceMonthly: number;
  subscriptionStatus: string;
};

type Payment = {
  paymentId: string;
  userId: string;
  userName: string;
  subscriptionId: string;
  subscriptionPlan: string;
  invoicePrice: number;
  invoiceNumber: number;
  paymentStatus: string;
  paidAt: string | null;
  invoiceStart: string;
  invoiceEnd: string;
};

type EventsTitle = string;

type UsersEvents = {
  userId: string;
  userName: string;
  userEmail: string;
  eventDate: string | null;
  eventTimeAgo?: string;
};

type SubsEvents = {
  userName: string;
  subscriptionId: string;
  subscriptionPlan: string;
  subscriptionStatus: string;
  eventDate: string | null;
  eventTimeAgo?: string;
};

type PaymentsEvents = {
  paymentId: string;
  paymentStatus: string;
  userName: string;
  eventDate: string | null;
  invoicePrice: string;
  eventTimeAgo?: string;
};

export type {
  Timeline,
  User,
  Subscription,
  Payment,
  EventsTitle,
  UsersEvents,
  SubsEvents,
  PaymentsEvents,
};
