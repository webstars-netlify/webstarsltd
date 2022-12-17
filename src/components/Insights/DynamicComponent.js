import React, { useState, useEffect } from "react"

import Categories from "./Categories"
import InsightList from "./InsightList"

const Components = {
  categories: Categories,
  show_insights_list: InsightList,
}

const DynamicComponent = ({ blok, showMore }) => {
  const [categoryTitle, setCategoryTitle] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("title") !== null
        ? localStorage.getItem("title")
        : ""
      : ""
  )
  const [loading, setLoading] = useState(false)

  console.log("Dynamic Component", categoryTitle)

  useEffect(() => {}, [categoryTitle])

  if (typeof Components[blok.component] !== "undefined") {
    // if (blok.component === "categories") {
    //   if (typeof window !== "undefined") {
    //     localStorage.setItem("title", blok.category_list[0].title)
    //   }
    // }
    // const Component = Components[blok.component]

    return blok.component === "categories" ? (
      <Categories
        blok={blok}
        // key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={setCategoryTitle}
        showMore={showMore}
        setLoading={setLoading}
      />
    ) : blok.component === "categories" && loading ? (
      <div>Loadingggggggggggggg</div>
    ) : (
      <InsightList
        blok={blok}
        // key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={setCategoryTitle}
        showMore={showMore}
      />
    )
  }

  return <></>
}

export default DynamicComponent
