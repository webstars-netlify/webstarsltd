import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Guide = ({ blok }) => {
  console.log("Check --------")
  console.log(blok.background_color_hex)
  return (
    <div {...storyblokEditable(blok)}>
      <div className="single-insight-guide">
        <div className="custom-container">
          <div
            className="marketing-guide"
            style={{
              backgroundColor: `${
                blok.background_color_hex
                  ? blok.background_color_hex
                  : "#140e10"
              }`,
            }}
          >
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-content">
                  <h6>{blok.marketing_guide[0].Subtitle}</h6>
                  <h4>
                    <span className="d-block">
                      {blok.marketing_guide[0].Title_White}
                    </span>{" "}
                    {blok.marketing_guide[0].Title_Cyan}
                  </h4>
                  <button className="btn btn-download">Download</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="marketing-guide-image">
                  <img
                    src={blok.marketing_guide[0].Section_Image.filename}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
