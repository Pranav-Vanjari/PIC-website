import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/image.png";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-right">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:yourmail@example.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
