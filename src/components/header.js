
import * as React from "react"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Layout 1', href: '/layout/' },
  { name: 'Layout 2', href: '#' },
  { name: 'Layout 3', href: '#' },
  { name: 'Layout 4', href: '#' },
]

export default function Header() {
  return (
    <header className="bg-slate-900 sticky top-0 z-index-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-slate-700 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Gravital</span>
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
                alt="Gravital Digital Logo"
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-blue-400 hover:text-amber-500">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-slate-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-50 hover:text-amber-500 hover:bg-slate-50"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-slate-50 py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-500"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-blue-400 hover:text-amber-500 hover:bg-opacity-75">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
