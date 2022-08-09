import React from "react"
import { storyblokEditable } from "@storyblok/js"
import moment from "moment"
import { render } from "storyblok-rich-text-react-renderer"

const InsightDescription = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="singleInsightSection2">
        <div class="custom-container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="singleInsightSec1-profile">
                <div class="singleInsightSec1-profile-img">
                  <img src={blok.user_img.filename} alt="" />
                </div>

                <h6>By {blok.user_name}</h6>
                <p>{moment(blok.date).format("MMMM Do, YYYY")}</p>

                <a href="#">ShareThis</a>
              </div>
            </div>

            <div class="col-lg-8 col-md-8 col-sm-12">
              <div class="singleInsightSec1-cont">
                <h6>{blok.title}</h6>
                {render(blok.description_para)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightDescription
