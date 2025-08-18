import React from "react";
import { Link, Outlet } from "react-router";

const AboutPage = () => {
  return (
    <div>
      <div>AboutPage</div>
      <Link to={`/about/about1`}>About1</Link>
      <Link to={`/about/about2`}>About2</Link>
      <div className="flex w-full text-2xl text-text font-urbanist justify-center bg-background">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutPage;
