import React from "react"
import { storyblokEditable } from "@storyblok/js"

// Page level import statements
import BannerText from "./BannerText"
import BannerImage from "./BannerImage"
import Summary from "./Summary"
import Solution from "./Solution"
import SimilarProjectQuote from "./SimilarProjectQuote"
import GlobalAudience from "../Home/GlobalAudience"
import Text from "../Projects/Text"

const Components = {
  "Summary Section": Summary,
  bottom_text: Text,
}

const DyanmicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return (
    <div>
      <div>DynamicComponent</div>
    </div>
  )
}

export default DyanmicComponent
