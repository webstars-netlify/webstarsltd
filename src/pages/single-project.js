import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import BannerText from "../components/SingleProject/BannerText"
import BannerImage from "../components/SingleProject/BannerImage"
import Summary from "../components/SingleProject/Summary"
import Solution from "../components/SingleProject/Solution"
import SimilarProjectQuote from "../components/SingleProject/SimilarProjectQuote"
import GlobalAudience from "../components/Home/GlobalAudience"
import Text from "../components/Projects/Text"

const SingleProject = () => {
  return (
    <Layout>
      <SEO title="Single Project" />
      <Navbar />
      <BannerText />
      <BannerImage />
      <Summary />
      <Solution />
      <SimilarProjectQuote />
      <GlobalAudience />
      <div className="testimonial-separator" style={{ marginTop: 16 }}>
        <div className="separator" />
      </div>
      <Text />
      <Footer />
    </Layout>
  )
}

export default SingleProject
