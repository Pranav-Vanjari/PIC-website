import React from "react";
import "./team.css";
import TeamCard from "../components/teamcard";
import member1 from "../assets/member.png";
import member2 from "../assets/member.png";
import member3 from "../assets/member.png";
import member4 from "../assets/member.png";
import member5 from "../assets/member.png";
import member6 from "../assets/member.png";

function Team() {
  const heads = [
    { img: member1, name: "Aarav Sharma", role: "Head" },
    { img: member2, name: "Meera Iyer", role: "Co-Head" },
  ];

  const teamMembers = [
    { img: member3, name: "Karan Patel", role: "Designer" },
    { img: member4, name: "Sneha Reddy", role: "Developer" },
    { img: member5, name: "Ravi Kumar", role: "Photographer" },
    { img: member6, name: "Ananya Gupta", role: "Coordinator" },
  ];

  return (
    <div className="team-page">
      <h1 className="team-title">Our Team</h1>

      {/* HEAD & CO-HEAD SECTION */}
      <section className="team-section">
        <h2>Head & Co-Head</h2>
        <div className="team-grid head-grid">
          {heads.map((person, index) => (
            <TeamCard key={index} {...person} />
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS SECTION */}
      <section className="team-section">
        <h2>Our Club's leads and co-leads</h2>
        <div className="team-grid">
          {teamMembers.map((person, index) => (
            <TeamCard key={index} {...person} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
