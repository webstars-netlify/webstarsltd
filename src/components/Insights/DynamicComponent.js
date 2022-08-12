import React from "react"

import Categories from "./Categories"
import InsightList from "./InsightList"

const Components = {
  categories: Categories,
  show_insights_list: InsightList,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
