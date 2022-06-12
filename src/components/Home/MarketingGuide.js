import React from "react"

import Heart from "../../assets/images/heart.png"

const MarketingGuide = () => {
  return (
    <>
      <div className="marketing-guide-section">
        <div className="custom-container">
          <div className="marketing-guide">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-content">
                  <h6>Insight</h6>
                  <h4>
                    <span className="d-block">
                      Download our Social Media Marketing guide
                    </span>{" "}
                    Honsec tetur adip isc ing elit, Mae cet nas sed arcu dolor.
                  </h4>
                  <button className="btn btn-download">Download</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-image">
                  <img src={Heart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ptb-80">
          <div className="separator">&nbsp;</div>
        </div>
      </div>
    </>
  )
}

export default MarketingGuide
