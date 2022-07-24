import React from "react"

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

const Process = () => {
  return (
    <Layout>
      <SEO title="Process" />
      <Navbar />
      <Banner
        title="Goodbye vanity metrics"
        subTitle="Hello account based marketing"
      />
      <ProcessDescription />
      <Clients />
      {/* <MarketingGuide /> */}
      <Text />
      <Footer />
    </Layout>
  )
}

export default Process
