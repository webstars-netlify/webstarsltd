import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import Text from "../components/Process/Text"
import MarketingGuide from "../components/Home/MarketingGuide"
import ProcessDescription from "../components/Process/ProcessDescription"
import Clients from "../components/Process/Clients"
import Banner from "../components/Process/Banner"
import ProcessMain from "../components/Process/ProcessMain"

import { useStoryblok } from "../utils/storyblok"

const Process = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Process" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblok(story)

  return (
    <Layout>
      <SEO title="Process" />
      <Navbar />
      <ProcessMain blok={story.content} />
      {/* <Banner
        title="Goodbye vanity metrics"
        subTitle="Hello account based marketing"
      />
      <ProcessDescription />
      <Clients /> */}
      {/* <MarketingGuide /> */}
      {/* <Text /> */}
      <Footer />
    </Layout>
  )
}

export default Process
