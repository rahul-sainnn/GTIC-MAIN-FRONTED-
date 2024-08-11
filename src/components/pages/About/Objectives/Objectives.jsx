import React from "react";
import "./Objectives.css";
import { objData } from "./objData";

const Objectives = () => {
  return (
    <>
    <div className="home-features">
      <h1>Objectives</h1>
      {objData.map((card, index) => (
        <div key={index}
          className={`home-feature-container ${index % 2 != 0 ? "rev" : ""}`}
        >
          {index % 2 == 0 && (
            <div className="home-feature-image">
              <img src={card.image} alt={card.title} />
            </div>
          )}
          <div className="home-feature-text">
            <div className="home-feature-heading">
              <h5>{card.title}</h5>
            </div>
            <p>{card.text}</p>
          </div>
          {index % 2 != 0 && (
            <div className="home-feature-image">
              <img src={card.image} alt={card.title} />
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Objectives;
