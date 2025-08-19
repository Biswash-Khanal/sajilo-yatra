import { navLinks } from "../assets/assets";
import NavigationItem from "./NavigationItem";

const NavBar = () => {
  return (
    <nav className="fixed w-full  bottom-0 p-1 bg-secondary text-primary">
      <ul className=" border-red-500 flex justify-around p-1">
        {navLinks.map(({ name, link, icon }) => {
          return (
            <li key={name}>
              <NavigationItem
                name={name}
                link={link}
                icon={icon}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
