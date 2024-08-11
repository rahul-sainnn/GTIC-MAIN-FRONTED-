import React from "react";
import { Icon } from "@iconify/react";
import EventDataHandling from "../HomeData/EventDataHandling";
import { NavLink } from "react-router-dom";

const counts = [
  {
    icon: "/Images/Home/Images/team.png",
    label: "participants",
    number: "400",
    duration: "1.5",
  },
  {
    icon: "/Images/Home/Images/employee.png",
    label: "Speakers",
    number: "30",
    duration: "1.5",
  },
  {
    icon: "/Images/Home/Images/worldwide.png",
    label: "Countries",
    number: "15",
    duration: "1.5",
  },
];

const HomeHeadingText = () => {
  return (
    <div className="carousel-text">
      <div className="carousel-position">
        <h1>Trading & Investing Conference For All Financial Markets</h1>
        <div className="home-timeline">
          <Icon icon="uil:calender" width="23" height="23" color="gold" />
          <span>May, 2024</span>
          <Icon
            icon="ion:location-outline"
            width="23"
            height="23"
            color="gold"
          />
          <span>TBD</span>
        </div>
        <div className="heading-features">
          <h2 style={{ color: "#5fa9ff", borderColor: "#5fa9ff" }}>Practice Workshops</h2>
          <h2 style={{ color: "#ee6d4e", borderColor: "#ee6d4e" }}>Educational Conference</h2>
          <h2 style={{ color: "#bd57df", borderColor: "#bd57df" }}>Networking</h2>
        </div>
        <div className="home-data-container">
          {counts.map((count, ind) => (
            <EventDataHandling key={ind}  ct={count} />
          ))}
        </div>
        <div className="home-button-container">
          <button className="heading-button">REGISTER YOUR INTEREST</button>
          <NavLink to={`/book-seat`}>
            <button className="heading-button seat">SECURE YOUR SEAT</button>
          </NavLink>
        </div>
        <h4>
          Stocks | ETFs | Index Futures | Bonds | Energies | Metals | Currencies
          Futures & Forex |<br />
          Agriculture | Options | Major Crypto Coins
        </h4>
      </div>
    </div>
  );
};

export default HomeHeadingText;
