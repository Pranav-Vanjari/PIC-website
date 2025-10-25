import React from "react";
import "./contact.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page" id="contact">
      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>Email: <a href="mailto:picclub@gmail.com">picclub@gmail.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:picclub@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
