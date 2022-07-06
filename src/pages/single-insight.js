import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import Banner from "../components/SingleInsight/Banner"
import BannerImage from "../components/SingleInsight/BannerImage"
import InsightDescription from "../components/SingleInsight/InsightDescription"
import MarketingGuide from "../components/SingleInsight/Guide"
import Suggestion from "../components/SingleInsight/Suggestion"
import Text from "../components/SingleInsight/Text"

const SingleInsight = () => {
  return (
    <Layout>
      <SEO title="Single Insights" />
      <Navbar />
      <Banner />
      <BannerImage />
      <InsightDescription />
      <MarketingGuide />
      <Suggestion />
      <Text />
      <Footer />
    </Layout>
  )
}

export default SingleInsight
