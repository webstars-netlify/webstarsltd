import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Banner = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="home-banner-single-insight">
        <div class="container">
          <h1>
            <span className="d-block">{blok.headline}</span>
            <span className="theme-color">{blok.subtitle}</span>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Banner
