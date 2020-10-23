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
          <h2>
            Hey! This is{" "}
            <a
              href="https://www.instagram.com/ovi_dius/"
              className="designza-link"
            >
              Ovi
            </a>
          </h2>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3>&hellip; and Photography is my passion </h3>
          <p>
            I’m a wedding photographer based in South East London, and for the
            last four years I’ve been covering weddings and chirstenings in UK,
            Romania and Ukraine.
          </p>
          <p>
            My fun and relaxed approach will make your day as memorable as the
            photos I take.
          </p>
          <p>
            I’m here to make your life easy and to give you an amazing
            collection of images that brings back all the emotions and beauty
            from your wedding day. From support and planning ahead of the day to
            a wonderful photography experience on the wedding day, to the work
            after, ensuring the very best images for you to treasure. This is
            all part of the service and something I do for every couple no
            matter what package you book.
          </p>
          <p>
            I will happily travel to photograph your wedding, so why not tell me
            about your ideas, I’d be thrilled to be your wedding photographer! I
            not only have the ability to capture the natural magic of your
            wedding, but I also create magic of my own whilst telling the full
            story of your day.
          </p>
          <p>Whatever your plans I would love to hear all about them.</p>
          <p>
            <Link to="/contact">Get in touch</Link> now to discuss your event.
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
