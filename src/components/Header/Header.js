import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";
const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="container h-100">
        <div className="d-flex justify-content-between align-items-center h-100">
          <NavLink to="/" className="contacts">
            Contacts
          </NavLink>
          <NavLink to="/contact/new" className="add">
            New contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
