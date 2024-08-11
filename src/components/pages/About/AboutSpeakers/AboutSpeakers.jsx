import React from "react";
import map2 from "/Images/About/maps/m2.png";
import "./AboutSpeakers.css";
import PieCharts from "../PieChart/PieChart";
import { pieData } from "../PieChart/pieData";

const AboutSpeakers = () => {
  return (
    <div className="speaker-about">
      <h3>
        Very rigorous{" "}
        <span style={{ color: "#3087d3" }}>Selection Process</span> for the{" "}
        <span style={{ color: "#3087d3" }}>Trading & Investing </span>Experts:
      </h3>
      <PieCharts pie={pieData[2]} /> 
      <img src={map2} alt="" />
      <p>
        The selection of speakers is based on their demonstrated competencies
        and all the following criteria, rather than relying on their social
        media presence or number of followers:
      </p>
      <ul>
        <li>
          <span>Strategies applicable to any asset</span> (Stocks, Futures,
          Options, Forex, Major Cryptos...)
        </li>
        <li>
          <span>Strategies applicable to any country's markets</span> (USA,
          Asia, Europe, UAE, assuming certain requirements are addressed)
        </li>
        <li>
          <span>Target are retail traders</span> - Individuals who either
          possess existing one or many brokerage accounts or intend to open
          accounts with amounts ranging from $1,000 to $20 million or up to the
          threshold amount that requires compliance with financial regulation.
        </li>
      </ul>
    </div>
  );
};

export default AboutSpeakers;
