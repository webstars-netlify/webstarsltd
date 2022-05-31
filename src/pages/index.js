import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Home Page components import statements
import Banner from "../components/Home/Banner"
import GlobalAudience from "../components/Home/GlobalAudience"
import EnvelopeSection from "../components/Home/EnvelopeSection"
import InsightDisplay from "../components/Home/InsightDisplay"
import MarketingGuide from "../components/Home/MarketingGuide"
import Text from "../components/Home/Text"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <GlobalAudience />
      <EnvelopeSection />
      <InsightDisplay />
      <MarketingGuide />
      <Text />
      <Footer />
    </Layout>
  )
}

export default Home
