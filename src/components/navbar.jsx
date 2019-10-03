import React from "react";

// Stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span className="badge badge-pill bagde-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
