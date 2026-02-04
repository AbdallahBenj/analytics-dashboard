import { UserCircleIcon } from "@heroicons/react/24/outline";

const navContent = {
  brand: {
    name: "A.Dashboard",
    imageUrl: "",
  },
  user: {
    name: "Tom Cook",
    email: "tom@example.com",
    profileIcon: UserCircleIcon,
    imageUrl: "",
  },
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ],
  userNavigation: [
    { name: "Your profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
};

export default navContent;
