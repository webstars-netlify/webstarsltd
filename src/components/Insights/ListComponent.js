import React from "react"
import { storyblokEditable } from "@storyblok/js"

import { useStoryblok } from "../../utils/storyblok"

// Page level import statements
import DynamicListComponent from "./DynamicListComponent"

const ListComponent = ({ story, index, categoryTitle, setShowMore }) => {
  let originalStory
  originalStory = useStoryblok(story)

  const filteredStory = originalStory.content.body.filter(
    childBlok =>
      childBlok.component === "insight_display" &&
      childBlok.insights[0].catgeory_name.length &&
      childBlok.insights[0].catgeory_name.includes(categoryTitle)
  )

  const content =
    originalStory.content.body &&
    filteredStory.map(childBlok => (
      <div className="col-md-6 col-lg-6" key={index}>
        <DynamicListComponent
          blok={childBlok}
          key={childBlok._uid}
          slug={story.slug}
          index={index}
          categoryTitle={categoryTitle}
        />
      </div>
    ))

  return (
    <div {...storyblokEditable(originalStory.content)} className="row">
      {content}
    </div>
  )
}

export default ListComponent
