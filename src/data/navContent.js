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
    imageUrl: "",
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
      href: "#",
      Icon: HomeIcon,
      current: true,
    },
    {
      name: "Analytics",
      href: "#",
      Icon: ChartBarIcon,
      current: false,
    },
    {
      name: "Customers",
      href: "#",
      Icon: UsersIcon,
      current: false,
    },

    {
      name: "Subscriptions",
      href: "#",
      Icon: CreditCardIcon,
      current: false,
    },
    {
      name: "Features",
      href: "#",
      Icon: SparklesIcon,
      current: false,
    },
    {
      name: "Reports",
      href: "#",
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
