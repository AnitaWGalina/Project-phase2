import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import "./Navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <header className="header">
      <nav className="Navbar">
        <h1 className="logo">
          <i className="fab fa-react"></i>Diet Generator{" "}
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <Hero /> */}
    </header>
  );
};

export default Navbar;
