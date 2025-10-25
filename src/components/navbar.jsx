import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <div className="navbar-content">
      <div className="navbar">
        <div className="navbar-left" onClick={() => setOpen(!open)}>
          <Link to="/" onClick={() => setOpen(false)}>
            <h1>PIC</h1>
          </Link>
        </div>

        <div className={`navbar-right ${open ? "open" : ""}`}>
          <Link
            to="/"
            className={getLinkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={getLinkClass("/events")}
            onClick={() => setOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/team"
            className={getLinkClass("/team")}
            onClick={() => setOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className={getLinkClass("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default NavBar;
