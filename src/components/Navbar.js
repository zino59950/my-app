import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="logout">
      <NavLink className="main-nav-item" to="/Login1">
        <FontAwesomeIcon icon={faUserCircle} />
        Tony
      </NavLink>
      <NavLink className="main-nav-item" to="/">
        <FontAwesomeIcon icon={faSignOut} />
        Sign Out
      </NavLink>
    </div>
  );
};

export default Navbar;
