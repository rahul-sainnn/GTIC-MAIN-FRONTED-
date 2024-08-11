import React from "react";
import "./WhoAttend.css";
import map1 from "/Images/About/maps/m1.png";
import PieCharts from "../PieChart/PieChart";
import { pieData } from "../PieChart/pieData";

const WhoAttend = () => {
  return (
    <div className="who-attend">
      <h1>Who Will <span style={{color: "#3087d3"}}>Attend</span>?</h1>
      <PieCharts pie={pieData[0]} /> 
      <PieCharts pie={pieData[1]} /> 
      <img src={map1} alt="" style={{ width: "100%" }} />
      <p>
        The mix of participants contributes to the richness and vibrancy of
        these events, fostering knowledge exhange and collaboration within the
        financial community
      </p>
      <ul className="who-main-points">
        <li>
          75% of all attendees are expected to be Individual Traders, Investors
          & IBS*:
        </li>
        <li>
          50% of attendees are expected to have already one or several brokerage
          accounts:
          <ul className="who-sub-points">
            <li>
              40% are expected to be investors finding value in exploring
              different asset classes, trading approaches, and market trends.
            </li>
            <li>
              10% are expected to be traders: day traders, swing traders, and
              algorithmic traders, can benefit from insights into new trading
              techniques, market analysis, and risk management strategies.
            </li>
          </ul>
        </li>
        <li>
          25% of attendees are expected to be Individuals who have a growing
          interest in Trading or Investing and have not yet opened a brokerage
          account.
          <ul className="who-no-points">
            <li>
              <span>Students and Aspiring Traders:</span> Individuals studying
              finance, economics, or interested in pursuing a career in trading
              can benefit from the educational opportunities and networking
              possibilities
            </li>
          </ul>
        </li>
        <li>
          25% are expected to be Financial Institutions, Authorities, Technology
          & Educational Providers
          <ul className="who-no-points">
            <li>
              <span>Brokers and Exchanges:</span> Representatives from brokerage
              firms and stock exchanges may attend to showcase their services
              and products or to gain insights into traders' needs and
              preferences.
            </li>
            <li>
              <span>Technology Providers:</span> Companies offering trading
              platforms, market data services, and financial technology
              solutions might attend to showcase their products to potential
              clients and gather feedback from traders.
            </li>
            <li>
              <span>Financial Professionals:</span> Financial advisors,
              portfolio managers, analysts, and other finance professionals can
              gain valuable knowledge and industry updates.
            </li>
            <li>
              <span>Educators and Researchers:</span> Professionals involved in
              trading education and financial research can participate to share
              their knowledge and findings.
            </li>
            <li>
              <span>Technology Providers:</span> Companies offering trading
              platforms, market data services, and financial technology
              solutions might attend to showcase their products to potential
              clients and gather feedback from traders.
            </li>
            <li>
              <span>Financial Regulators:</span> Regulatory authorities and
              policymakers might participate in trading events to stay informed
              about industry developments and address relevant issues.
            </li>
            <li>
              <span>Industry Experts and Keynote Speakers:</span> Renowned
              traders, financial analysts, economists, and market experts are
              often invited to deliver keynote speeches and share their
              insights.
            </li>
            <li>
              <span>Media and Journalists:</span> Media professionals covering
              financial markets and trading activities may attend to report on
              the event and conduct interviews with industry participants.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default WhoAttend;
