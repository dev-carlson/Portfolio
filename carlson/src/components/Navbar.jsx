import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { IoIosReorder } from "react-icons/io";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <IoIosReorder />
        </button>
      </div>
      <div className="links">
        <Link className="homelink" to="/"> Home </Link>
        <Link className="projectlink" to="/projects"> Projects </Link>
        <Link className="experiencelink" to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
