import React, { useEffect, useRef, useState } from "react";
import head_counter from "/Images/Home/head_counter.png";
import "./HomeHeading.css";
import { Icon } from "@iconify/react";
import EventData from "../HomeData/EventData";
import { useMediaQuery } from 'react-responsive';

const HomeHeading = () => {
  const [width, setWidth] = useState(30);
  const isTablet = useMediaQuery({ maxWidth: 955 }) 

  useEffect(() => {
    if (isTablet) {
      setWidth(20);
    } else {
      setWidth(30);
    }
  }, [isTablet]);

  return (
    <div className="">
      <div className="home-head">
        <div className="home-content">
          <h1>
            <p style={{ color: "#0000b1", marginBottom: 0 }}>
              Trading & Investing Conference
            </p>{" "}
            For All Financial Markets
          </h1>
          <h4 className="home-markets">(USA, Europe, Asia, and GCC Markets)</h4>
          <div className="home-timeline">
            <div>
              <Icon
                icon="uil:calender"
                width={width}
                color="#0000b1"
              />
              <span>May, 2024</span>
            </div>
            <div>
              <Icon
                icon="ion:location-outline"
                color="#0000b1"
                width={width}
              />
              <span>TBD</span>
            </div>
          </div>
          <EventData />
          <h4 className="sub-title-home" id="st1">
            Stocks | ETFs | Index Futures | Bonds | Energies | Metals |
            Currencies Futures & Forex | Agriculture | Options | Major Crypto
            Coins
          </h4>
        </div>
        <img src={head_counter} alt="" className="home-head-img" />
      </div>
      <h4 className="sub-title-home" id="st2">
        Stocks | ETFs | Index Futures | Bonds | Energies | Metals | Currencies
        Futures & Forex | Agriculture | Options | Major Crypto Coins
      </h4>
    </div>
  );
};

export default HomeHeading;
