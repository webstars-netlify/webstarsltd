import React from "react"

import InsightOne from "../../assets/images/insight1.png"
import InsightTwo from "../../assets/images/insight2.png"
import InsightThree from "../../assets/images/insight/img3.png"
import InsightFour from "../../assets/images/insight/img4.png"
import InsightFive from "../../assets/images/insight/img5.png"
import InsightSix from "../../assets/images/insight/img6.png"

const InsightLists = () => {
  return (
    <>
      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-one"
                style={{ backgroundColor: "#3fa0d71f" }}
              >
                <h6>Insight</h6>
                <h4>
                  Creativity in a time of crisis: how can you make a difference?
                </h4>
                <img
                  src={InsightOne}
                  alt="Insight"
                  className="insight-display-one-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-two"
                style={{ backgroundColor: "#ECECEC50" }}
              >
                <h6>Insight</h6>
                <h4>How to build Your User Persona</h4>
                <img
                  src={InsightTwo}
                  alt="Insight"
                  className="insight-display-two-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-one"
                style={{ backgroundColor: "#7450A71f" }}
              >
                <h6>Insight</h6>
                <h4>Automating Your Email Marketing with Autoresponders</h4>
                <img
                  src={InsightThree}
                  alt="Insight"
                  className="insight-display-one-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-two"
                style={{ backgroundColor: "#3fa0d71f" }}
              >
                <h6>Insight</h6>
                <h4>Social Media strategies & the importance of LinkedIn</h4>
                <img
                  src={InsightFour}
                  alt="Insight"
                  className="insight-display-two-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-one"
                style={{ backgroundColor: "#3FA0D71f" }}
              >
                <h6>Insight</h6>
                <h4>Account Based Marketing Success with Sales Navigator</h4>
                <img
                  src={InsightFive}
                  alt="Insight"
                  className="insight-display-one-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-two light"
                style={{ backgroundColor: "#777A7B" }}
              >
                <h6>Insight</h6>
                <h4>
                  Creativity in a time of crisis: how can you make a difference?
                </h4>
                <img
                  src={InsightOne}
                  alt="Insight"
                  className="insight-display-two-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-one light"
                style={{ backgroundColor: "#7450A7" }}
              >
                <h6>Insight</h6>
                <h4>Automating Your Email Marketing with Autoresponders</h4>
                <img
                  src={InsightThree}
                  alt="Insight"
                  className="insight-display-one-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                className="insight-display-two dark"
                style={{ backgroundColor: "#3FA0D71f" }}
              >
                <h6>Insight</h6>
                <h4>Working remotely: setting your team up for success</h4>
                <img
                  src={InsightSix}
                  alt="Insight"
                  className="insight-display-two-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InsightLists
