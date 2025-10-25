import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-content">
      <div className="navbar">
        <div className="navbar-left" onClick={() => setOpen(!open)}>
          <Link to="/" onClick={() => setOpen(false)}>
            <h1>PIC</h1>
          </Link>
        </div>

        <div className={`navbar-right ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
          <Link to="/team" onClick={() => setOpen(false)}>Team</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default NavBar;
