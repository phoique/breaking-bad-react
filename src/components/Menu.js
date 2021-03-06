import React from "react";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Breaking Bad React (BBR)
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/characters">
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quotes">
                Quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Menu);
