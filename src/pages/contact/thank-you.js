import React from "react"
import Layout from "../../components/layout"

const ThankYouPage = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <section className="section mt-6">
      <div className="row">
        <div className="col-4 is-vertically-center u-align--center">
          <i className="p-icon--big-smile"></i>
        </div>
        <div className="col-8">
          <h3>Thank you for your message!</h3>
          <p>Someone from our team will get in touch with you shortly.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default ThankYouPage

export const thankYouPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
