import React from "react";
import "./BookSeat.css";
import { ticketData } from "./ticketData";
import TicketCard from "./TicketCard";
import RegisterDetails from "./RegisterDetails";
import ScrollToTop from "../../utilities/ScrollToTop/ScrollToTop";

const BookSeat = () => {
  return (
    <>
    <ScrollToTop />
      <div id="register" className="price-data">
        <div className="price-data-container">
          <h1>CONFERENCE REGISTRATION</h1>
          <div className="ticket-container">
            {ticketData.map((ticket, ind) => (
              <TicketCard key={ind} ticket={ticket} ind={ind} />
            ))}
          </div>
        </div>
      </div>
      <RegisterDetails />
    </>
  );
};

export default BookSeat;
