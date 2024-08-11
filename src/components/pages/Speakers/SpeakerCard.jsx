import "./SpeakerCard.css";
import { Icon } from "@iconify/react";
import { specialSpeakerData } from "./speakerData";

const colors = ["#0a6dff", "#04439f"];

const SpeakerCard = () => {
  return (
    <>
      {specialSpeakerData.map((sp, i) => (
        <div key={i}>
          <h4>{sp.title}</h4>
          <div className="image-acc">
            {sp.speakers.map((speaker, index) => (
              <div
                key={index}
                className={`image-items`}
                style={{
                  backgroundColor: colors[i],
                  backgroundImage: `url(${speaker.image})`,
                }}
              >
                <h3>{speaker.name}</h3>
                <div className="speaker-detail">
                  <ul>
                    {speaker.points.map((point, ind) => (
                      <li key={ind}>{point}</li>
                    ))}
                  </ul>
                  <p>
                    <Icon
                      icon="humbleicons:location"
                      color="#ee6d4e"
                      height={18}
                    />{" "}
                    <span>{speaker.address} </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SpeakerCard;
