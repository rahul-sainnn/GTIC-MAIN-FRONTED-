import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Footer.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const footerRef = useRef(null);

  return (
    <div>
      <MDBFooter id="c" bgColor="dark" color="white" className="">
        <section className="d-flex justify-content-lg-between p-4 border-bottom"></section>

        <section className="">
          <MDBContainer className="mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="3"
                xl={3}
                className="mx-auto mb-4 footer-links"
              >
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About Event
                  </a>
                </p>
                <p>
                  <a href="/speaker" className="text-reset">
                    Speakers
                  </a>
                </p>
                <p>
                  <a href="/schedule" className="text-reset">
                    Schedule
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sponsors
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="9" lg="9" xl={9} className="mx-auto mb-4 text-center">
                <div className="mb-5">
                  <h6 className="text-uppercase fw-bold mb-2">
                    GTIC CONFERENCE
                  </h6>
                  <p style={{ fontSize: 12 }}>
                    As the first of its kind event in the GCC region, the
                    Trading & Investing Conference is a one-of-a-kind platform
                    where financial markets from across the globe (USA, Europe,
                    Asia) and diverse assets converge for discussion.
                  </p>
                </div>

                <div className="contact">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <p>
                    <span>Jamila Qaissi</span>
                  </p>
                  <p>+973 38 80 18 56</p>
                  <p>jamila.qaissi@globaltradingconsulting.com</p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            gticonference.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
