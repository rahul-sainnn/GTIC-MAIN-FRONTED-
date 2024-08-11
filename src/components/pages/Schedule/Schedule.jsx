import React, { useEffect, useState } from "react";
import "./Schedule.css";
import axios from "axios";
import DayCard from "./helpers/DayCard";
import ScrollToTop from "../../utilities/ScrollToTop/ScrollToTop";

const Schedule = () => {
  const [eve, setEvent] = useState(0);
  const [combinedData, setCombinedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCombinedData = async () => {
    try {
      const dateResponse = await axios.get(
        "https://gtic-server.vercel.app/schedule/get-dates"
      );
      const datesData = dateResponse.data.dates;

      const scheduleResponse = await axios.get(
        "https://gtic-server.vercel.app/schedule/get-schedule"
      );
      const scheduleData = scheduleResponse.data.schedule;

      const combine = datesData.map((date) => ({
        ...date,
        scheduleList: scheduleData.filter(
          (schedule) => schedule.dateId === date.dateId
        ),
      }));

      let count = 1;

      const newCombine = combine.map((comb) => ({
        ...comb,
        scheduleList: comb.scheduleList.map((slsc) => ({
          ...slsc,
          sessionCount: slsc.isBreak ? null : count++,
        })),
      }));

      setCombinedData(newCombine);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching combined data:", error);
    }
  };

  useEffect(() => {
    fetchCombinedData();
  }, []);

  const goToSlide = (index) => {
    setEvent(index);
  };

  return (
    <div className="schedule">
    <ScrollToTop />
      <h1>DRAFT AGENDA</h1>
      {isLoading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : combinedData.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <>
          <ul className="schedule-list">
            {combinedData.map((_, index) => (
              <li
                key={index}
                className={`${index === eve ? "act" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <span>{combinedData[index].number}</span>
              </li>
            ))}
          </ul>
          <div className="schedule-container">
            <div className="schedule-content">
              {combinedData[eve].scheduleList.map((pts, index) => {
                return <DayCard pts={pts} key={index} ind={index} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Schedule;
