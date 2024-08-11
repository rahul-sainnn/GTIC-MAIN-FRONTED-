import React, { useState } from "react";
import "./HomeIntro.css";
import { AnimatePresence, motion } from "framer-motion";

const HomeIntro = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 1 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      <div className="home-head-container">
        <div className="home-head-content">
          <div className="intro-text">
            <p id="hp">Join us at the Premier conference.</p>
            <span>UNLOCK </span>
            <span>YOUR </span>
            <span>FINANCIAL </span>
            <span>POTENTIAL</span>
            <hr />
            <div className="home-intro-text">
              <p>
                As the first of its kind <b>event in the GCC region</b>, the{" "}
                <b>Trading & Investing Conference</b> is a one-of-a-kind
                platform where financial markets from across the globe (USA,
                Europe, Asia) and diverse assets converge for discussion.
              </p>
              <p>
                The post-covid era has witnessed a remarkable surge in brokerage
                accounts, yet only a mere{" "}
                <b>5% of traders and investors worldwide </b>
                consistently achieve profitable results. Despite the abundance
                of free educational content and tips on social media and other
                platforms, the reality remains stark and unsettling.
              </p>

              <AnimatePresence mode="wait">
                {isShowMore && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <>
                      <p>
                        Prepare to encounter the <b>candid truth</b> and engage
                        in panel discussions covering controversial topics that
                        will challenge conventional notions.
                      </p>
                      <p>
                        <b>
                          In the face of potential recession and persistently
                          high inflation rates,
                        </b>{" "}
                        there couldn’t be a more opportune moment to delve
                        deeper into the realms of trading and investing. Whether
                        it’s to generate additional income, build wealth, or
                        plan for retirement, this conference offers a wealth of
                        knowledge and insight.
                      </p>
                      <p>
                        Seasoned traders and inspiring investors alike will have
                        the invaluable chance to interact with leading{" "}
                        <b>
                          experts hailing from the USA, Europe, South Asia, and
                          the Middle East.
                        </b>{" "}
                        These experts will unveil winning strategies and the
                        essential skill sets required for triumph.
                      </p>
                      <p>
                        As the event unfolds and progresses through numerous
                        editions, it aspires to become a{" "}
                        <b>
                          prominent hub of thought leadership within the GCC’s
                        </b>{" "}
                        trading and investment community. Get ready for two days
                        of high value discussions and insights from
                        distinguished speakers and influential figures from all
                        corners of the world.
                      </p>
                    </>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="intro-button-container">
              <motion.button
                className="read-home-button"
                // whileHover={{ scale: 1 }}
                onClick={toggleReadMoreLess}
                animate={{ scale: isShowMore ? 1.1 : 1 }}
              >
                {isShowMore ? "Read Less" : "Read More"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntro;
