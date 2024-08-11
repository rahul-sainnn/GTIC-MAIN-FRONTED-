import React from "react";
import HomeHeading from "./HomeHeading/HomeHeading";
import EventData from "./HomeData/EventData";
import HomeIntro from "./HomeIntro/HomeIntro";
import "./Home.css";
import Speakers from "../Speakers/Speakers";
import Schedule from "../Schedule/Schedule";
import BookSeat from "../BookSeat/BookSeat";
import Sticky from "../../utilities/StickyButton/StickyButton";
import ScrollToTop from "../../utilities/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HomeHeading />
      <HomeIntro />
      <Schedule />
      <Sticky />
    </>
  );
};

export default Home;
