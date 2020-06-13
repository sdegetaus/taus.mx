import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "pages.contact" })}
    />
    <h1>{intl.formatMessage({ id: "pages.contact" })}</h1>
  </Layout>
);

export default injectIntl(ContactPage);
