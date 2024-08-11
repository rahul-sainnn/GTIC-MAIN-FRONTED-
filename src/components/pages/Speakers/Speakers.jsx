import React, { useEffect, useState } from "react";
import "./Speakers.css";
import { Icon } from "@iconify/react";
import SpeakerCard from "./SpeakerCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import ScrollToTop from "../../utilities/ScrollToTop/ScrollToTop";

const colors = ["#7533b7", "#04439f", "#421d68", "#2f154c", "#0a6dff"];

const Speakers = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCombinedData = async () => {
    try {
      const token = localStorage.getItem("token");

      // Fetch titles data
      const titlesResponse = await axios.get(
        "https://gtic-server.vercel.app/titles/get-titles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const titlesData = titlesResponse.data.titles;

      // Fetch speakers data
      const speakersResponse = await axios.get(
        "https://gtic-server.vercel.app/speakers/get-speakers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const speakersData = speakersResponse.data.speakers;

      // Combine titles and speakers data
      const combinedData = titlesData.map((title) => ({
        ...title,
        speakers: speakersData.filter(
          (speaker) => speaker.titleId === title.titleId
        ),
      }));

      setCombinedData(combinedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching combined data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCombinedData();
  }, []);

  const speakersPerRow = 4;

  const groupSpeakersIntoRows = (speakers, ind) => {
    const rows = [];
    for (let i = 0; i < speakers.length; i += speakersPerRow) {
      rows.push(speakers.slice(i, i + speakersPerRow));
    }
    return rows;
  };

  return (
    <div className="speaker-container">
      <ScrollToTop />
      <div className="speakers">
        <h1>SPEAKERS</h1>
      </div>
      <SpeakerCard />

      {loading ? (
        <div className="text-center mb-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        combinedData.map((sp, i) => (
          <div key={i}>
            <h4>{sp.title}</h4>
            <div className="image-accordion">
              {sp.speakers && Array.isArray(sp.speakers) ? (
                groupSpeakersIntoRows(sp.speakers, sp.id).map(
                  (row, rowIndex) => (
                    <div className="image-row" key={rowIndex}>
                      {row.map((speaker, index) => (
                        <div
                          key={index}
                          className="image-item"
                          style={{
                            backgroundColor: colors[index % 5],
                            backgroundImage: `url(${speaker.image})`,
                          }}
                        >
                          <h3>{speaker.name}</h3>
                          <div className="speaker-details">
                            <ul>
                              {speaker.sentences.map((point, ind) => (
                                <li key={ind}>{point}</li>
                              ))}
                            </ul>
                            <span>
                              <Icon
                                icon="humbleicons:location"
                                color="#ee6d4e"
                                height={18}
                              />{" "}
                              {speaker.address}{" "}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )
              ) : (
                <p>No speakers available</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Speakers;
