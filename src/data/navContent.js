import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CreditCardIcon,
  SparklesIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

import DashboardLogo from "../assets/dashboard-logo.svg";

const navContent = {
  brand: {
    name: "Analytics",
    imageUrl: DashboardLogo,
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
};

export default navContent;
