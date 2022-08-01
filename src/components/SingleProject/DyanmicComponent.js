import React from "react"
import { storyblokEditable } from "@storyblok/js"

import MainComponent from "./MainComponent"

const Components = {
  "Single Project": MainComponent,
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
