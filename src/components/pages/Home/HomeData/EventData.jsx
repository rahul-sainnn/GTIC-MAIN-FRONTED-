import "./EventData.css";
import EventDataHandling from "./EventDataHandling";
import head_counter from "/Images/Home/head_counter.png";

const counts = [
  {
    color: "#00cfd4",
    label: "Practice Workshop",
  },
  {
    color: "#c29b9b",
    label: "Educational Conference",
  },
  {
    color: "#809d00",
    label: "Networking",
  },
];

const EventData = (p) => {
  return (
    <>
      <div className="home-data">
        <div className="home-data-container">
          {counts.map((count, i) => (
            <EventDataHandling ct={count} key={i} />
          ))}
        </div>
        <img src={head_counter} alt="" className="home-data-img" />
      </div>
    </>
  );
};

export default EventData;
