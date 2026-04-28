type Timeline = { date: string };

type User = {
  userId: string;
  userName: string;
  userCountry: string;
  userEmail: string;
  userCreatedAt: string;
};

type Subscription = {
  subsId: string;
  userId: string;
  userName: string;
  userCreatedAt: string;
  subsStartDate: string;
  subsEndDate: string;
  subsDuration: number;
  subsPlan: string;
  priceMonthly: number;
  subsStatus: string;
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

export type { Timeline, User, Subscription, Payment };
