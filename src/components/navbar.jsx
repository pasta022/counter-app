import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            Navbar
            <span className="badge badge-pill bg-secondary m-2">
              {props.totalCount}
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
