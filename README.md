<p align="center">
  <a href="https://www.gravitaldigital.com/">
    <img alt="Gravital" src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png" width="200" />
  </a>
</p>

# Gatsby Tailwindcss Starter

This is a basic Gatsby site using the [Tailwindcss](https://tailwindcss.com/) starter but modified for our specific uses. Namely, we use it to get up to speed with new clients or new projects. It starts with some basic branding then moves to creating a personality for the site. A number of pages are set up for exploring layouts and styles.

[Tailwind Install Docs] (https://tailwindcss.com/docs/guides/gatsby)

## 1. Create a project

```
gatsby new my-project
cd my-project
```

## 2. Install Tailwind CSS

Using npm, install tailwindcss and its peer dependencies, as well as gatsby-plugin-postcss, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```
npm install -D tailwindcss postcss autoprefixer gatsby-plugin-postcss
npx tailwindcss init -p
```


## 3. Enable the Gatsby PostCSS plugin

```
module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    // ...
  ],
}
```

NOTE: For a more robust solution, I've been using the following:

```
{
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
    }
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: false,
      develop: false,
      tailwind: true,
    },
  },  
```

## 4. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 5. Disable Gatsby's default styles

Either delete the contents of layout.css in the layout.js component or disable the import like so:

```
// import "./layout.css"
```

NOTE: we don't need the @tailwindcss/typography plugin for most components to work

## 6. Add the Tailwind directives to your CSS

Create a ./src/styles/global.css file and add the @tailwind directives for each of Tailwind’s layers.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 7. Import the CSS file

Create a gatsby-browser.js file at the root of your project if it doesn’t already exist, and import your newly-created ./src/styles/global.css file.

```
import './src/styles/global.css'
```

## 8. Start the build process

```
gatsby develop
```

## 9. Modify Gatsby Config

### a. Add the siteMetadata:

```
siteMetadata: {
    links: {
      facebook: `https://www.facebook.com/gogravital/`,
      twitter: `https://twitter.com/gogravital/`,
    },
    locale: `en`,
    title: ` | Website Developers`,
    titleTemplate: `Gravital Digital | Website Design and Development`,
    description:
      `Blazing fast websites using Jamstack - Next.js, Gatsby, WordPress, Drupal.`,
    siteUrl: `https://www.gravitaldigital.com`, // No trailing slash allowed!
    twitterUsername: `@gogravital`,
    publicURL: `/rocket-social-card.jpg`, // This will be the default 'social' image for social media shares (in the static folder)
    organization: `Gravital Digital`,
    author: `@gogravital`,
  },
```

### b. modify starter Gatsby configuration

### c. Add and configure manifest

### d. Add plugins as needed

### e. Add analytics as needed

### f.  Add Typekit as needed

NOTE: See Gravital Branding for boilerplatenpm 

	
## 10. Configure Layout

This is the current boilerplate that takes care of adding the Title (with useStaticQuery), Header, and Footer:

```
 import React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { MDXProvider } from "@mdx-js/react"
 import Header from "./header"
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata.title} />
       <div className="container mx-auto bg-gravital-darker-blue sm:px-6 lg:px-8">
         <main>{children}</main>
       </div>
       <Footer />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 ```
 
 NOTE: In the future, see about setting up MDX (these packages are in the configuration)
 
 ## 12. Configure SEO component (Helmet)
 
 This is the boilerplate we're currently using that matches up with the site metadata:
 
 ```
 /**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
```
 

## 11. Page Boilerplate

Starting with pages/index.js, we'll now use the following boilerplate to start with on each page:

```
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Layout2 = () => {
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
                  Tailwindcss.com
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="https://tailwindui.com/"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-sans font-medium rounded-md text-slate-50 bg-amber-900 hover:bg-amber-600"
                >
                  TailwindUI.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Layout2
```

## Other Features to Consider:

### 1. To install custom fonts from Adobe (Adobe Fonts project)

This was taken from this Gatsby page: https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource

a. First, install the Gatsby plugin with npm

`npm install --save gatsby-plugin-web-font-loader`

For more info see: https://www.gatsbyjs.com/plugins/gatsby-plugin-web-font-loader/?=font

b. Set up a Web Project in Adobe fonts

https://helpx.adobe.com/fonts/using/add-fonts-website.html

c. Then, create an environment variable to store your Adobe Fonts project ID. (Make sure this file is in your .gitignore file so your ID doesn’t get committed!) For example, if your Adobe Fonts project ID is abcdefg, your .env file will look like this:

`TYPEKIT_ID=abcdefg`
.env file

d. Now you can add the gatsby-plugin-web-font-loader plugin to your gatsby-config.js file, located in your root directory. In your plugin configuration, pass in the environment variable you created.

```
require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
}
```

e. Finally, add it to your Tailwind CSS configuration file (usually tailwind.config.js). How you do this depends on your desired usage.

```
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ["roboto", "sans-serif"]
      }
    }
  }
};
```

This works based on these docs from tailwind: 

https://tailwindcss.com/docs/font-family#customizing-your-theme

f. Use the updated font classes depending on what styles and weights you imported

```
<div className="font-sans font-black text-3xl">
    "Hello World"
</div>
```

### 2. Heroicons

https://heroicons.com/

### 3. Tailwind aspect  ratio

https://github.com/tailwindlabs/tailwindcss-aspect-ratio

### 4. Tailwind forms

https://github.com/tailwindlabs/tailwindcss-forms

### 5. Tailwind typography

https://github.com/tailwindlabs/tailwindcss-typography


## Thanks for your interest! You can follow me on Twitter at [@sparker888](https://www.twitter.com/sparker888).

### Fly safe!
