import React, { useEffect, useState } from "react";
import logo from "../assets/image.png";
import "./bg.css";

function BG() {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.min(window.scrollY / 100, 10); // max blur = 10px
      setBlur(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bgimg"
      style={{
        filter: `blur(${blur}px) brightness(${1 - blur / 20})`,
      }}
    >
      <img src={logo} alt="logo" className="bg-logo" />

      <div className="scroll-indicator">
        <p>Scroll for the content</p>
        <div className="cone"></div>
      </div>
    </div>
  );
}

export default BG;
