import React, { useRef } from "react";
import "./DayCard.css";
import { Icon } from "@iconify/react";
import "animate.css";
import { motion } from "framer-motion";

const DayCard = ({ pts, ind }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 1 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div
      className="day-card"
      style={{
        backgroundColor: `${pts.bgcolor || (pts.isBreak && "#d2e4f3")}`,
      }}
    >
      <div className="schedule-time">
        <span>
          <Icon
            icon="akar-icons:clock"
            color="#2759a8"
            height={18}
            style={{ marginRight: "5px" }}
          />
          {pts.startTime +
            " " +
            pts.startZone +
            " - " +
            pts.endTime +
            pts.endZone}
        </span>
      </div>
      <div className="schedule-head">
        {!pts.isBreak && <p>Session {pts.sessionCount}</p>}
        <h5>{pts.heading}</h5>
      </div>
      <div className="schedule-details">
          <p>{pts.details}</p>
      </div>
    </div>
    </motion.div>
  );
};

export default DayCard;

