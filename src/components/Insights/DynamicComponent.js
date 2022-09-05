import React, { useState } from "react"

import Categories from "./Categories"
import InsightList from "./InsightList"

const Components = {
  categories: Categories,
  show_insights_list: InsightList,
}

const DynamicComponent = ({ blok }) => {
  const [categoryTitle, setCategoryTitle] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("title") !== null
        ? localStorage.getItem("title")
        : ""
      : ""
  )

  if (typeof Components[blok.component] !== "undefined") {
    if (blok.component === "categories") {
      if (typeof window !== "undefined") {
        localStorage.setItem("title", blok.category_list[0].title)
      }
    }
    const Component = Components[blok.component]

    return (
      <Component
        blok={blok}
        key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={setCategoryTitle}
      />
    )
  }

  return <></>
}

export default DynamicComponent
