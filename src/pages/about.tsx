import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.about" })} />
    <h1>{intl.formatMessage({ id: "content.about.title" })}</h1>
    <p
      dangerouslySetInnerHTML={{
        __html: intl.formatMessage({ id: "content.about.body" }),
      }}
    />
  </Layout>
);

export default injectIntl(AboutPage);
