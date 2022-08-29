import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ListComponent from "./ListComponent"
import { useStoryblok } from "../../utils/storyblok"

const InsightLists = ({ categoryTitle }) => {
  let { story } = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
        filter: { field_component: { eq: "Single Insight" } }
      ) {
        edges {
          node {
            field_component
            slug
            uuid
            id
            name
            content
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="insight-display ptb-40 insight-display-list">
        <div className="container">
          <div className="row">
            {story.edges.map((originalStory, index) => (
              <div className="col-md-6 col-lg-6" key={index}>
                <ListComponent story={originalStory.node} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default InsightLists
