import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header/Header.module.scss"
const Header = () => {
  return (
      <nav className={styles.navbar}>
        <div className="container d-flex justify-content-between align-items-center h-100">
          <NavLink to='/' className={styles.contacts}>Contacts</NavLink>
          <NavLink to='/contact/new' className={styles.add}> New contact</NavLink>
        </div>
      </nav>
  );
};

export default Header;
