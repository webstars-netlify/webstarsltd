import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import ProjectBanner from "../components/Projects/ProjectBanner"
import GlobalAudience from "../components/Projects/GlobalAudience"
import EnvelopeSection from "../components/Projects/EnvelopeSection"
import Testimonial from "../components/Projects/testimonial"
import Text from "../components/Projects/Text"

const Home = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      <ProjectBanner
        title="Plan, design and build"
        subTitle="Track, Measure & Improve"
      />
      <GlobalAudience />
      <EnvelopeSection />
      <GlobalAudience />
      <EnvelopeSection />
      <GlobalAudience />
      <Testimonial />
      <Text />
      <Footer />
    </Layout>
  )
}

export default Home
