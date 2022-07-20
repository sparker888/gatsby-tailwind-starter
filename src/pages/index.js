import * as React from "react"
import Layout from "../components/layout"
import ScrollButton from "../components/scrollup"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Contact from "../components/contact"

const Home = () => {
  return (
    <Layout>
      <>
        <div className="bg-black">
          <Hero />
          <ScrollButton />
          <Cta />
          <Contact />
        </div>
      </>
    </Layout>
  )
}

export default Home
