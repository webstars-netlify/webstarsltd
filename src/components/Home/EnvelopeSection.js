import React from "react"

import Envelope from "../../assets/images/envelope.png"

const EnvelopeSection = () => {
  return (
    <div className="envelope-section ptb-80">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="envelope-section-image">
              <img src={Envelope} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content">
              <h6>Aon ReMetrica</h6>
              <h4>
                Overcoming ‘webinar fatigue’ with a results-driven, multichannel
                campaign{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnvelopeSection
