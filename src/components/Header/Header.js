import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light m-0" to='/contacts'>Contacts</NavLink>
          <NavLink to='/contact/new' class="btn btn-light">
            Add
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
