import React from "react";
import "./TicketCard.css";
import { Icon } from "@iconify/react";

const TicketCard = ({ ind, ticket }) => {
  // console.log(ind);
  return (
    <>
      <div
        className="ticket-card"
        style={{
          backgroundColor: `${
            ind ? (ind === 1 ? "#173c85" : "#732a89") : "#ad9513"
          }`,
        }}
      >
        <h4> {ticket.title} </h4>
        {/* <h2> {ticket.price} </h2> */}
        <ul>
          <li>
            <Icon icon={ticket.check1} color={ticket.color1} height={25} />{" "}
            Custom Badge{" "}
          </li>
          <li>
            <Icon icon={ticket.check1} color={ticket.color1} height={25} /> 2
            Days Conference{" "}
          </li>
          <li>
            <Icon icon={ticket.check2} color={ticket.color2} height={25} />{" "}
            Workshop (2H IN DAY 2){" "}
          </li>
          <li>
            <Icon icon={ticket.check3} color={ticket.color3} height={25} />{" "}
            COCKTAIL RECEPTION (100 PASSES ONLY){" "}
          </li>
        </ul>
        <div className="ticket-card-register">
          <button>Register Now</button>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
