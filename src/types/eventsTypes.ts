type EventsTitle = string;

type UsersEvents = {
  userId: string;
  userName: string;
  userEmail: string;
  eventDate: string | null;
  eventTimeAgo: string;
};

type SubsEvents = {
  subsId: string;
  userName: string;
  subsPlan: string;
  subsStatus: string;
  eventDate: string;
  eventTimeAgo: string;
};

type PaymentsEvents = {
  paymentId: string;
  paymentStatus: string;
  userName: string;
  paidDate: string;
  invoicePrice: string;
  paymentTimeAgo: string;
};

// type UsersEvents = {
//   eventsTitle: EventsTitle[];
//   events: Events[];
// };

export type { EventsTitle, UsersEvents, SubsEvents, PaymentsEvents };
