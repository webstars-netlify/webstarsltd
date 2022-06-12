import React from "react"

import Envelope from "../../assets/images/envelope.png"

const EnvelopeSection = () => {
  return (
    <div className="envelope-section">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="envelope-section-image">
              <img src={Envelope} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="section-content">
              <h6>Aon ReMetrica</h6>
              <h4>
                Overcoming ‘webinar fatigue’ with a results-driven, multichannel
                campaign{" "}
              </h4>
              <div className="stats">
                <h4>
                  394 <span>Lorem ipsum dolor sit amet</span>
                </h4>
                <h4 className="stats-last">
                  585 <span>Con sectetur elit</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnvelopeSection
