import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Layout1 = () => {
  return (
    <Layout>
      <div className="grid place-items-center h-screen bg-slate-500">
        <div class="w-7xl mx-auto">
          <div className="text-center p-12 border border-slate-900 sm:rounded-md bg-slate-200">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              <span className="block font-serif tracking-tight italic pt-2">
                Ready to dive in?
              </span>
              <span className="block font-serif text-2xl tracking-tight italic pt-2 pb-10">
                Take the blue pill or the red pill?
              </span>
            </h2>
            <div>
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="https://tailwindcss.com/"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-sans font-medium rounded-md text-slate-50 bg-sky-900 hover:bg-sky-600"
                >
                  Tailwind CSS
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="https://tailwindui.com/"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-sans font-medium rounded-md text-slate-50 bg-amber-900 hover:bg-amber-600"
                >
                  Tailwind UI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Layout1
