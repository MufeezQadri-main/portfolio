import React from "react";
import "./YouCard.css";

export default function YouCard() {
  return (
    <div className="you-card-container">
      <div className="you-card">
        <div className="you-card-image">
          <img src="/images/you.png" alt="Profile" />
        </div>
        <div className="you-card-shine"></div>
      </div>
    </div>
  );
}
