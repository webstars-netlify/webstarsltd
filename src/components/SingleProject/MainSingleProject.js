import React from "react"
import { storyblokEditable } from "@storyblok/js"

// Page level import statements
import DynamicComponent from "./DyanmicComponent"

const MainSingleProject = ({ blok }) => {
  console.log(JSON.stringify(blok))
  const content =
    blok.body &&
    blok.body.map(childBlok => (
      <DynamicComponent blok={childBlok} key={childBlok._uid} />
    ))

  return <div {...storyblokEditable(blok)}>{content}</div>
}

export default MainSingleProject
