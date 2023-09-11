import React from "react";

export default function PageHero({ heroTitle = "" }) {
  return (
    <div className="hero-Size">
      <div className="slide-caption">
        <div className="slide-title">
          <h2>{heroTitle}</h2>
        </div>
      </div>
    </div>
  );
}
