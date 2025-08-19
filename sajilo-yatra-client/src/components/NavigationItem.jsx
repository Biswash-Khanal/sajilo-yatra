import { NavLink } from "react-router";

const NavigationItem = ({ name, link, icon }) => {
  return (
    <NavLink
      to={link}
      className={(path) => (path.isActive ? "text-blue-500" : "")}
    >
      <div className="transition-all duration-500 active:bg-amber-200 flex flex-col items-center border-2 rounded-2xl p-1 w-20 sm:w-30 md:w-45 xl:w-55">
        {icon}
        <span className="hidden sm:block">{name}</span>
      </div>
    </NavLink>
  );
};

export default NavigationItem;
