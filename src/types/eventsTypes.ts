type EventsTitle = string;

type UsersEvents = {
  userId: string;
  userName: string;
  userEmail: string;
  eventDate: string | null;
  eventTimeAgo?: string;
};

type SubsEvents = {
  subsId: string;
  userName: string;
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

// type UsersEvents = {
//   eventsTitle: EventsTitle[];
//   events: Events[];
// };

export type { EventsTitle, UsersEvents, SubsEvents, PaymentsEvents };
