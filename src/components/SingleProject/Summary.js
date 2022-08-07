import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Summary = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="single-projectSec2">
        <div class="custom-container">
          <div class="row">
            <div class="col-md-6 pr-5">
              <div class="singl-project-sec2-cont">
                <h6>Summary</h6>
                <p>
                  Leading global insurance company Aon needed an engaging and
                  results-driven approach to promoting ReMetrica V8 - the latest
                  update to Aon’s capital modelling software - as well as their
                  annual capital modelling webinars. The webinar series is a
                  highlight of Aon’s reinsurance division, placing Aon as
                  knowledge leaders in the reinsurance market and showcasing
                  ReMetrica’s risk and capital modelling capabilities.
                </p>
              </div>
            </div>
            <div class="col-md-6 pl-5">
              <div class="singl-project-sec2-cont">
                <h6>Breif</h6>
                <p>
                  This brief lent itself perfectly to a multichannel campaign,
                  all highly targeted and personalised to the most relevant
                  audiences.
                  <br />
                  <br />
                  The capital modelling webinar series had some great insights
                  and expertise for the reinsurance industry, from CFOs to
                  actuaries - therefore, the messaging for each audience had to
                  be relevant and engaging, addressing their specific needs and
                  challenges around risk and capital modelling. At the same
                  time, it was incredibly important for our messaging to be
                  pattern-interrupting, making reinsurance and capital modelling
                  ‘sexy’.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Summary
