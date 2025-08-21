import {
  Route,
  DollarSign,
  House,
  MessagesSquare,
  BusFront,
} from "lucide-react";

//constants
const navItemIconSize = 20;

export const navLinks = [
  {
    name: "Vehicles",
    link: "/vehicles",
    icon: (
      <BusFront
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Routes",
    link: "/routes",
    icon: (
      <Route
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Home",
    link: "/home",
    icon: (
      <House
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Fares",
    link: "/fares",
    icon: (
      <DollarSign
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
  {
    name: "Feedback",
    link: "/feedback",
    icon: (
      <MessagesSquare
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
];
