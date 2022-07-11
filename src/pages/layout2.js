import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ScrollButton from "../components/scrollup"
import Full1 from "../components/full-1left-2right"
import Full2 from "../components/full-2left-1right"
import Grid1 from "../components/grid-1left-2right"
import Grid2 from "../components/grid-2left-1right"
import Grid2Equal from "../components/grid-2equal"
import Benefits from "../components/benefits"
import Cta from "../components/cta"
import Contact from "../components/contact"

const Home = () => {
  return (
    <Layout>
      <>
        <div className="bg-black">
          <ScrollButton />
          <Full1 />
          <Full2 />
          <Grid1 />
          <Grid2 />
          <Grid2Equal />
        </div>
      </>
    </Layout>
  )
}

export default Home
