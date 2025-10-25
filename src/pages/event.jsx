import React from "react";
import events from "../data/eventdata";
import "./event.css";

function Event() {
  return (
    <div className="events-page">
      <h1 className="events-title">Our Events</h1>

      {events.length > 0 ? (
        <div className="event-grid">
          {events.map((ev) => (
            <div key={ev.id} className="event-card">
              <img src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-events">
          <h2>No Events Available</h2>
          <p>Stay tuned — we’ll announce our next event soon!</p>
        </div>
      )}
    </div>
  );
}

export default Event;
