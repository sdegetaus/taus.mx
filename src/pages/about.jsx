import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.about" })} />
    <div className={``}>
      <div className={``}>
        <img src="" alt="" />
      </div>
      <div className={``}>
        <h2>{intl.formatMessage({ id: "content.about.title" })}</h2>
      </div>
      <div className={``}>
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "content.about.body" }),
          }}
        />
      </div>
    </div>
  </Layout>
);

export default injectIntl(AboutPage);
