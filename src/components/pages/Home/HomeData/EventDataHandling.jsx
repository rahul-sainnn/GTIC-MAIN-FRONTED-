import React, { useEffect, useState } from "react";

const EventDataHandling = ({ ct }) => {
  const { label, color } = ct;

  // const [count, setCount] = useState("0");

  // useEffect(() => {
  //     let start = 0;
  //     const end = Math.round(parseFloat(number));;
  //     if (start === end) return;

  //     let totalMilSecDur = parseInt(duration);
  //     let incrementTime = (totalMilSecDur / end) * 1000;

  //     let timer = setInterval(() => {
  //       start += 1; // Adjust the division factor as needed
  //       setCount(String(start) + (start < end ? "+" : ""));
  //       if ((start >= end && end >= 0) || (start <= end && end < 0)) {
  //         setCount(String(end) + (end < 450 ? "+" : ""));
  //         clearInterval(timer);
  //       }
  //     }, incrementTime);
  // }, [number, duration]);

  return (
    <div className="count" style={{borderColor: color}}> 
      <div>
        {/* <h1>{count}</h1> */}
        <span style={{color: color}}>{label}</span>
      </div>
    </div>
  );
};

export default EventDataHandling;
