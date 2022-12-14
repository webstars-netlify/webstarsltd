import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import MainComponent from "../components/Insights/MainComponent"

import { useStoryblok } from "../utils/storyblok"

const Insights = () => {
  let { story, insights } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Insights" }) {
        full_slug
        name
        uuid
        id
        content
      }
      insights: allStoryblokEntry(
        filter: { field_component: { eq: "Single Insight" } }
        sort: { order: DESC, fields: created_at }
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
  const [showMore, setShowMore] = useState(insights.edges.slice(0, 8))

  story = useStoryblok(story)

  const updateViewMore = () => {
    const copy = insights.edges.slice(0)
    setShowMore(copy)
  }

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Insights" />
      <Navbar />
      {/* Body Component Starts here */}
      <MainComponent
        blok={story.content}
        updateViewMore={updateViewMore}
        showMore={showMore}
        setShowMore={setShowMore}
      />
      {showMore.length < 10 ? (
        <div className="viewMoreParent">
          <button onClick={updateViewMore} className="viewMoreBtn">
            View More
          </button>
        </div>
      ) : null}
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Insights
