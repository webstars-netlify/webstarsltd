import React, { useState } from "react"

import Categories from "./Categories"
import InsightList from "./InsightList"

const Components = {
  categories: Categories,
  // show_insights_list: InsightList,
}

const DynamicComponent = ({ blok, showMore, setShowMore, insights }) => {
  const [categoryTitle, setCategoryTitle] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("title") !== null
        ? localStorage.getItem("title")
        : ""
      : ""
  )

  console.log("Dynamic Component", categoryTitle)
  const changeCategory = title => {
    if (title === categoryTitle) {
      setCategoryTitle("")
      localStorage.removeItem("title")
      setShowMore(insights.edges.slice(0, 8))
    } else {
      setCategoryTitle(title)
    }
  }

  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]

    return (
      <Component
        blok={blok}
        key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={changeCategory}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    )
  }

  return <></>
}

export default DynamicComponent
