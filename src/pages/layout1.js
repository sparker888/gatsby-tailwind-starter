import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout1 = () => {
    return (
        <>
        <Header />
        <div className="font-sans font-black text-3xl">
        "Hello, can you hear me now?"
        </div>
        <Footer />
        </>
    )
}

export default Layout1