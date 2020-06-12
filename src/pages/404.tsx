import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.404" })} />
    <h1>
      <FormattedMessage id="pages.404" />
    </h1>
  </Layout>
)

export default injectIntl(NotFoundPage)
