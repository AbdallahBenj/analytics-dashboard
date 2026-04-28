type EventsTitle = string;

type Events = {
  userId: string;
  userName: string;
  userEmail: string;
  eventDate: string | null;
  eventTimeAgo: string;
};

type UsersEvents = {
  eventsTitle: EventsTitle[];
  events: Events[];
};

export type { EventsTitle, Events, UsersEvents };
