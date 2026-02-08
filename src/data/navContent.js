import {
  UserCircleIcon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CreditCardIcon,
  SparklesIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navContent = {
  brand: {
    name: "Analytics",
    imageUrl: "analytics-dashboard-icon.svg",
  },
  user: {
    name: "Tom Cook",
    email: "tom@example.com",
    profileIcon: UserCircleIcon,
    imageUrl: "",
  },
  navigation: [
    {
      name: "Dashboard",
      href: "/",
      Icon: HomeIcon,
      current: true,
    },
    {
      name: "Analytics",
      href: "/analytics",
      Icon: ChartBarIcon,
      current: false,
    },
    {
      name: "Customers",
      href: "/customers",
      Icon: UsersIcon,
      current: false,
    },

    {
      name: "Subscriptions",
      href: "/subscriptions",
      Icon: CreditCardIcon,
      current: false,
    },
    {
      name: "Features",
      href: "/features",
      Icon: SparklesIcon,
      current: false,
    },
    {
      name: "Reports",
      href: "/reports",
      Icon: ChartPieIcon,
      current: false,
    },
  ],
  userNavigation: [
    { name: "Your profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  settings: {
    name: "Settings",
    Icon: Cog6ToothIcon,
  },
};

export default navContent;
