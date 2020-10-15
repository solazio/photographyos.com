import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Natural. Informal. Creative.</h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3>Photography is my passion </h3>
          <p>
            I’m a wedding photographer based in South East London, and for the
            last four years I’ve been covering weddings and chirstenings in UK,
            Romania and Ukraine.
          </p>
          <p>
            I love being surrounded by happy people, and I am grateful to be
            able to be part of the most wonderful and special moments in my
            clients life.
          </p>
          <p>
            Don't worry about the weather! You and those happy people surrunding
            you on one of the most important days in your life are making
            memomarable photos.
          </p>
          <p>
            The whole way I work is aimed at bringing a relaxed approach while
            creating beautiful, natural and vibrant images that have a touch of
            romance and lots of fun. I’m here to make your life easy and to give
            you an amazing collection of images that brings back all the
            feelings from your wedding day. From support and planning ahead of
            the day to a wonderful photography experience on the wedding day, to
            the work after ensuring the very best images for you to treasure.
            It’s all part of the service and something I do for every couple no
            matter what package you book. Whatever your plans I would love to
            hear all about them. I will happily travel to photograph your
            wedding, so why not tell me about your ideas, I’d be thrilled to be
            your wedding photographer! I not only have the ability to capture
            the natural magic of your wedding, but I also create magic of my own
            whilst telling the full story of your day. My style has been
            described as soulful, joyful, sophisticated and finessed. My fun and
            relaxed approach will make your day as memorable as the images I
            will provide to you, in a gorgeous custom made album with stunning
            wall art that will create a legacy for your family. A combination of
            my artistic expression and your personal style will set the scene
            for your dream wedding. My darling wife Melissa and I know how you
            feel and know what you want because we were married early in 2011,
            and know how important wedding photography is. We can't wait to do
            the same for you!
          </p>
          <p>
            <Link to="/contact">Get in touch</Link> now to book me for your
            event.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
