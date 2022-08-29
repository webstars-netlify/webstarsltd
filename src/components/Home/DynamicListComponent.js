import React from "react"

import ListComponentRendering from "./ListComponentRendering"

const Components = {
  project_display: ListComponentRendering,
}

const DynamicListComponent = ({ blok, slug }) => {
  if (
    typeof Components[blok.component] !== "undefined" &&
    blok.component === "project_display"
  ) {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} slug={slug} />
  }

  return <></>
}

export default DynamicListComponent
