import React, { useState } from "react";
import "./WhyAttend.css";
import { newAttendData, oldAttendData } from "./attendData";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const WhyAttend = () => {
  return (
    <div className="why-attend">
      <h2>Why Attend?</h2>
      <hr />
      <div className="new-attend">
        <div className="new-attend-head">
          <span>For </span> <span>POTENTIAL NEW TRADERS,</span>{" "}
          <span> INVESTORS & IBs*</span>
        </div>
        <Row xs={1} md={3} lg={3} className="g-4">
          {newAttendData.map((nw, i) => (
            <Col key={i} className="attend-col">
              <div className="new-attend-card">
                <p>{nw}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="new-attend old-attend">
        <div className="new-attend-head">
          <span>For</span> <span id="diff">NEW & EXPERIENCED TRADERS,</span>{" "}
          <span> INVESTORS & IBs*</span>
        </div>
        <Row xs={1} md={3} lg={3} className="g-4">
          {oldAttendData.map((nw, i) => (
            <Col key={i}>
              <div className="new-attend-card">
                <p>{nw}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="more-attend">
        <span>More to </span> <span style={{color: "#3087d3"}}>Know</span>
        <ul className="why-attend-bullets">
          <li>Learn who are the only <i>5% winners</i> in trading and investing</li>
          <li>
            Hear from world-class traders, investors and money managers on best
            practices to adopt to achieve a consistent profit and manage risk,
            through live trading sessions: orders set -up with real cash trading
            account
          </li>
          <li>
            Get ready for the current <i>economic challenges</i> and the <i>financial
            crisis</i> coming forward
          </li>
          <li>Discover <i>new trading and investing opportunities</i></li>
          <li>
            Understand the <i>scam behind certain platform brokers</i> and select the
            <i>right platform broker</i>
          </li>
          <li>
            Network with other savvy traders, investors, money managers and fund
            managers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyAttend;
