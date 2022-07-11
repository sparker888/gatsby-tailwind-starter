import * as React from "react"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Start", href: "../layout1/" },
  { name: "Style Guide", href: "../style-guide/" },
  { name: "Templates-0", href: "../layout2/" },
]

export default function Header() {
  return (
    <header className="relative top-0 bg-slate-900">
      <nav
        className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between border-b border-slate-700 py-3 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only font-logo">Gravital Digital</span>
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                alt="Gravital Digital Logo"
              />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map(link => (
                <Link
                  key={link.name}
                  title={link.name}
                  to={link.href}
                  className="font-body text-base font-bold text-blue-500 hover:text-amber-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="inline-block">
              <h2 className="ml-4 font-logo text-2xl font-bold text-sky-600">
                Gravital<span className="text-amber-600">Digital</span>
              </h2>
            </div>
            <Link
              to="../showcase/"
              title="Showcase"
              className="sm:content hidden rounded-full border border-transparent bg-sky-600 py-2 px-4 font-sans text-base font-normal text-amber-50 transition duration-500 hover:bg-sky-900 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 sm:inline-block sm:w-auto"
            >
              Showcase
            </Link>
            <Link
              to="/contact/"
              title="Contact"
              className="inline-block rounded-full border border-transparent bg-amber-600 py-2 px-4 font-sans text-base font-normal text-sky-50 transition duration-500 hover:bg-amber-900 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 sm:w-auto"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map(link => (
            <Link
              key={link.name}
              title={link.name}
              to={link.href}
              className="font-body text-base font-bold text-sky-600 hover:text-amber-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
