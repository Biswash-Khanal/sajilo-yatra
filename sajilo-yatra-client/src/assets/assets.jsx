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
    name: "vehicles",
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
    link: "/route",
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
    name: "Fare",
    link: "/fare",
    icon: (
      <DollarSign
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
  {
    name: "feedback",
    link: "/feedback",
    icon: (
      <MessagesSquare
        size={navItemIconSize}
        strokeWidth={2}
      />
    ),
  },
];
