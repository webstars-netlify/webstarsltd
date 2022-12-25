import React from "react"

import ListComponent from "./ListComponent"

const InsightLists = ({ showMore, categoryTitle, setShowMore }) => {
  return (
    <>
      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            {showMore.map((originalStory, index) => (
              <ListComponent
                key={index}
                story={originalStory.node}
                index={index}
                categoryTitle={categoryTitle}
                setShowMore={setShowMore}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InsightLists
