import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-link active text-success-emphasis"
          aria-current="page"
        >
          My contactList
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/contacts" className="nav-link active">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
