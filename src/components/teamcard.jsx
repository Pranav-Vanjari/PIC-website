import React from "react";
import "./teamcard.css";

function TeamCard({ img, name, role }) {
  return (
    <div className="team-card">
      <img src={img} alt={name} className="member-img" />

      <div className="overlay">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default TeamCard;
